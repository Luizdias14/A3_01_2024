<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados</title>
</head>
<body>

<?php
$conexao = mysqli_connect("localhost", "root", "", "dados");
if(!$conexao){
    echo "Sem conexão"
}
    echo "Conectado";

    $cpf = $_POST ["CPF"];
    $cpf = mysqli_real_escape_string($conexao, $cpf);

    $sql = "SELECT cpf FROM teste.dados WHERE cpf='$cpf'";
    $retorno = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($retorno)>0){
        echo"CPF EXISTENTE";

    } ELSE{
        $cpf= $_POST ['cpf'];
        $idade $_POST ['nome'];
        $nome= $_POST ['idade'];
        
        $sql = " INSERT INTO teste.dados(cpf, idade, nome) values ('$cpf', '$idade', '$nome')";
        $resultado = mysqli_query($conexao, $sql);
        echo "Usuário Cadastrado";
    }


?>
</body>
</html>