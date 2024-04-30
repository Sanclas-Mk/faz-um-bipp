<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContatoEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $dadosDoFormulario;
    public function __construct($dadosDoFormulario)
    {
        $this->dadosDoFormulario = $dadosDoFormulario;
    }

    public function build()
    {
        return $this->subject('Formulário de Contato')->view('emails.contato');
    }


    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
