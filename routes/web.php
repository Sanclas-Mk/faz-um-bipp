<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\FilteredArticlesController;
use App\Models\Category;
use App\Models\Tag;
use App\Http\Controllers\NewsletterController;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContatoEmail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('AboutView');
});

Route::get('/faq', function () {
    return Inertia::render('faq');
});

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');

Route::get('/blog/articles/{article}', [BlogController::class, 'show'])->name('articles.view');
Route::get('/most-viewed-article', [BlogController::class, 'mostViewedArticle']);
Route::get('/articles/{category}/related', [BlogController::class, 'related']);
Route::get('/artigos', [BlogController::class, 'filteredArticles'])->name('artigos');
Route::get('articles/by-tag/{tagId}', [BlogController::class, 'articlesByTag'])->name('articles.by.tag');


Route::get('/contato', function () {
    return Inertia::render('contato');
});

Route::get('/politica-privacidade', function () {
    return Inertia::render('PoliticaPrivacidade');
});

Route::get('/categories', function () {
    return Category::all();
});

Route::get('/tags', function () {
    return Tag::all();
});

Route::post('/enviar-contato', function (Request $request) {
    // Enviar email com os dados do formulário para o email Zoho
    Mail::mailer('zoho')->to('testesanclas@gmail.com')->send(new ContatoEmail($request->all()));
    return response()->json(['message' => 'Email enviado com sucesso!']);
});

Route::inertia('/newsletter', 'NewsletterForm');
Route::post('/subscribe', [NewsletterController::class, 'subscribe']);

Route::post('/newsletter/save', [NewsletterController::class, 'saveNewsletter']);




Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/articles', [ArticleController::class, 'index'])->name('articles');
    Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
    Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
    Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
    Route::get('/articles/{article}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
    Route::put('/articles/{article}', [ArticleController::class, 'update'])->name('articles.update');
    Route::post('/upload-image', [ArticleController::class, 'uploadImage']);
    Route::post('/articles/delete-multiple', [ArticleController::class, 'deleteMultiple'])->name('articles.delete_multiple');

    Route::resource('/tags', TagController::class);
    Route::get('/tags', [TagController::class, 'index'])->name('tags');
    Route::put('/tags/{id}', [TagController::class, 'update']);
    Route::post('/tags/delete-multiple', [TagController::class, 'deleteMultiple'])->name('tags.delete_multiple');

    Route::resource('/categories', CategoryController::class);
    Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::post('/categories/delete-multiple', [CategoryController::class, 'deleteMultiple'])->name('categories.delete_multiple');


    Route::post('/upload-image', [ImageController::class, 'upload']);
});
