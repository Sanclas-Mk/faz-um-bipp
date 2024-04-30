<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        return Inertia::render('blog/tags', ['tags' => $tags]);
    }

    public function create()
    {
        return Inertia::render('blog/tags');
    }

    public function store(Request $request)
    {
        Tag::create($request->validate([
            'name' => ['required'],
        ]));
        return Inertia::location(route('tags'));
    }

    public function show(string $id)
    {
        //
    }

    public function deleteMultiple(Request $request)
    {
        Tag::whereIn('id', $request->ids)->delete();

        return to_route('tags');
    }
}
