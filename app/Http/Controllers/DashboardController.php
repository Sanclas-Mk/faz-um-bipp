<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Tag;
use App\Models\Category;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get()->map(function ($article) {
            // Adiciona o caminho completo da imagem
            $article->image = asset('images/' . $article->image);
            return $article;
        });

        $tags = Tag::all();
        $categories = Category::all();

        return Inertia::render('Dashboard', [
            'articles' => $articles,
            'tags' => $tags,
            'categories' => $categories,
        ]);
    }
}
