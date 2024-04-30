<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewsletterMail;
use Illuminate\Support\Facades\Log;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subscribers,email'
        ]);

        Subscriber::create([
            'email' => $request->email
        ]);

        return response()->json(['message' => 'Inscrição na newsletter bem-sucedida!']);
    }

    public function sendNewsletter(Request $request)
    {
        $subscribers = Subscriber::all();

        foreach ($subscribers as $subscriber) {
            try {
                Mail::to($subscriber->email)->send(new NewsletterMail($request->content));
            } catch (\Exception $e) {
                // Se ocorrer algum erro durante o envio do e-mail, registra no log e continua com o próximo assinante
                Log::error('Erro ao enviar e-mail para o assinante ' . $subscriber->email . ': ' . $e->getMessage());
            }
        }

        return response()->json(['message' => 'Newsletter enviada com sucesso!']);
    }

    public function newsletter()
    {
        $content = Newsletter::value('content');

        return view('newsletter')->with('content', $content);
    }

    // Função para salvar o conteúdo da newsletter
    public function saveNewsletter(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required|string'
        ]);

        // Salvar o conteúdo da newsletter no banco de dados    
        Newsletter::updateOrCreate([], ['content' => $validatedData['content']]);

        return response()->json(['message' => 'Conteúdo da newsletter salvo com sucesso!']);
    }

    public function send(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required|string'
        ]);

        $this->sendNewsletter($validatedData['content']);

        return back()->with('success', 'Newsletter enviada com sucesso!');
    }
}
