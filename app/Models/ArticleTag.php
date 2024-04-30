<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArticleTag extends Model
{
    protected $table = 'article_tag';

    // Relacionamento com o modelo Article
    public function article()
    {
        return $this->belongsTo(Article::class);
    }

    // Relacionamento com o modelo Tag
    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
