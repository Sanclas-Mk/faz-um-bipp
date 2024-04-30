<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->paginate(6);
        return Inertia::render('blog/articles', ['articles' => $articles]);
    }

    public function create()
    {
        $categories = Category::all();
        $tags = Tag::all();
        return Inertia::render('blog/create', compact('categories', 'tags'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'content' => ['required'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'category_id' => ['required', 'exists:categories,id'],
            'tags' => ['array'],
            'tags.*' => ['exists:tags,id'],
        ]);

        DB::transaction(function () use ($request) {
            // Upload da imagem
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $imageUrl = $imageName;
            } else {
                $imageUrl = null; // Se nenhuma imagem for enviada
            }

            // Criação do artigo com a imagem
            $article = Article::create([
                'title' => $request->title,
                'content' => $request->content,
                'image' => $imageUrl, // Salva a URL da imagem no banco de dados
                'category_id' => $request->category_id,
            ]);

            // Associa as tags ao artigo
            $article->tags()->attach($request->tags);
        });

        return to_route('articles');
    }

    public function uploadImage(Request $request)
    {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);

        return response()->json(['image' => $imageName]);
    }

    public function show($id)
    {
        $article = Article::findOrFail($id);
        $categories = Category::all();
        $tags = $article->tags;
        $article->increment('views_count');
        $article->image = url('images/' . $article->image);
        return Inertia::render('blog/showArticle', compact('article', 'categories', 'tags'));
    }


    public function edit(string $id)
    {
        $article = Article::findOrFail($id);
        $categories = Category::all();
        $tags = Tag::all();
        return Inertia::render('blog/edit', compact('article', 'categories', 'tags'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required'],
            'content' => ['required'],
            'image' => ['image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'category_id' => ['required', 'exists:categories,id'],
            'tags' => ['array'],
            'tags.*' => ['exists:tags,id'],
        ]);

        $article = Article::findOrFail($id);

        DB::transaction(function () use ($request, $article) {
            // Atualiza os campos do artigo
            $article->title = $request->title;
            $article->content = $request->content;
            $article->category_id = $request->category_id;

            // Verifica se uma nova imagem foi enviada
            if ($request->hasFile('image')) {
                // Deleta a imagem antiga se existir
                if ($article->image && file_exists(public_path('images/' . $article->image))) {
                    unlink(public_path('images/' . $article->image));
                }

                // Faz o upload da nova imagem
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $article->image = $imageName;
            }

            $article->save();

            // Atualiza as tags associadas ao artigo
            $article->tags()->sync($request->tags);
        });

        return to_route('articles');
    }


    public function deleteMultiple(Request $request)
    {
        Article::whereIn('id', $request->ids)->delete();

        return to_route('articles');
    }
}
