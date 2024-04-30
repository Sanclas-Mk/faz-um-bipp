<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use App\Models\ArticleTag;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $tags = Tag::all();
        $articles = Article::orderBy('created_at', 'desc')->get();
        $mostViewedArticle = $this->mostViewedArticle();
        return Inertia::render('blog', ['categories' => $categories, 'tags' => $tags, 'articles' => $articles, 'mostViewedArticle' => $mostViewedArticle]);
    }

    public function mostViewedArticle()
    {
        return Article::orderBy('views_count', 'desc')->first();
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

    public function related($categoryId)
    {
        // Recuperar os artigos relacionados à categoria fornecida
        $relatedArticles = Article::orderBy('created_at', 'desc')->where('category_id', $categoryId)->limit(3)->get();


        return response()->json($relatedArticles);
    }

    public function filteredArticles()
    {
        $categories = Category::all();
        $tags = Tag::all();
        $articles = Article::orderBy('created_at', 'desc')->get();

        return Inertia::render('blog/filteredArticles', ['categories' => $categories, 'tags' => $tags, 'articles' => $articles]);
    }

    public function articlesByTag($tagId)
    {
        // Obter todos os registros da tabela pivot com a tag específica
        $articleTagRecords = ArticleTag::where('tag_id', $tagId)->get();

        // Extrair os IDs dos artigos associados
        $articleIds = $articleTagRecords->pluck('article_id');

        // Obter os artigos correspondentes aos IDs
        $articles = Article::whereIn('id', $articleIds)->orderBy('created_at', 'desc')->get();

        // Retornar os artigos encontrados
        return $articles;
    }
}
