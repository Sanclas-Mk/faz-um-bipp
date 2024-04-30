<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('blog/categories', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('blog/categories');
    }

    public function store(Request $request)
    {
        Category::create($request->validate([
            'name' => ['required'],
        ]));
        return Inertia::location(route('categories'));
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $category->update($request->all());

        return;
    }

    public function show(string $id)
    {
        //
    }

    public function deleteMultiple(Request $request)
    {
        Category::whereIn('id', $request->ids)->delete();

        return to_route('categories');
    }
}
