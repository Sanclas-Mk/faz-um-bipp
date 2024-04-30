@component('mail::message')
# Newsletter Mensal

{!! $content !!}

Obrigado por assinar nossa newsletter!

Atenciosamente,
A equipe do nosso site
{{ config('app.name') }}
@endcomponent