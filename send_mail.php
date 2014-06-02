<?php ob_start() ?>
<table>
	<thead>
		<th>Nombre</th>
		<th>Apellidos</th>
		<th>Teléfono</th>
		<th>Celular</th>
		<th>Email</th>
		<th>Ciudad</th>		
		<th>País</th>	
	</thead>
	<tr>
		<td><?php echo $_POST['nombre'] ?></td>
		<td><?php echo $_POST['apellidos'] ?></td>
		<td><?php echo $_POST['telefono'] ?></td>
		<td><?php echo $_POST['celular'] ?></td>
		<td><?php echo $_POST['email'] ?></td>
		<td><?php echo $_POST['ciudad'] ?></td>
		<td><?php echo $_POST['pais'] ?></td>
	</tr>
</table>
<table>
	<thead>
		<th>Comentario</th>
	</thead>
	<tr>
		<td><?php echo $_POST['comentario'] ?></td>
	</tr>
</table>

<?php $content = ob_get_clean() ?>

<?php 
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
//$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.bitweb.mx";
$mail->Port = 587;
$mail->Username = "f.portela@bitweb.mx";
$mail->Password = "bitwebfpv378";

$mail->From = 'f.portela@bitweb.mx';
$mail->FromName = 'Torre-m';
$mail->addAddress($_POST['email'], $_POST['nombre']);     // Add a recipient
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Nuevo Mensaje de Contacto';
$mail->Body    = $content;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
 	header( 'Location: http://'.$_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF'].'/../' ) ;
}
