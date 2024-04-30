<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagem de contato Bipp</title>
</head>

<body>
    <h2>Nova mensagem de contato</h2>
    <p><strong>Nome:</strong> {{ $dadosDoFormulario['name'] }}</p>
    <p><strong>Telefone:</strong> {{ $dadosDoFormulario['phone'] }}</p>
    <p><strong>Email:</strong> {{ $dadosDoFormulario['email'] }}</p>
    <p><strong>Mensagem:</strong> {{ $dadosDoFormulario['message'] }}</p>
</body>

</html>