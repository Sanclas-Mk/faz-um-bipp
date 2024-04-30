<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $imageUrl = Storage::url($imagePath);
            return response()->json(['url' => $imageUrl]);
        }
        return response()->json(['error' => 'Nenhuma imagem encontrada'], 400);
    }
}
