<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Stevebauman\Purify\Casts\PurifyHtmlOnGet;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['image', 'title', 'content', 'category_id', 'views_count'];
    protected $casts = [
        'content' => PurifyHtmlOnGet::class,
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'article_tag');
    }
}
