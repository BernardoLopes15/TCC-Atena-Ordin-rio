<?php
	include("conexao.php");

	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$email = $dados->email;
		$senha = $dados->senha;
	}

    $sql = "select * from tb_psicologo where nm_email = '$email' and nm_senha = '$senha' and acesso = '1';";

	try{
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$listaDados = array("id" => $row["cd_psicologo"], "nome" => $row["nm_psicologo"], "nivelAcesso" => "psicologo", "email" => $row["nm_email"]);
			}

			echo json_encode(['response' => $listaDados]);

		} else {
			$sql = "select * from tb_paciente where nm_email = '$email' and nm_senha = '$senha' and acesso = '1';";

			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$listaDados = array("id" => $row["cd_paciente"], "nome" => $row["nm_paciente"], "nivelAcesso" => "paciente", "email" => $row["nm_email"]);
				}

				echo json_encode(['response' => $listaDados]);
			}
		}
	} catch (Exception $e){
		echo json_encode(['response' => false]);
	}


    $conn->close();
?>