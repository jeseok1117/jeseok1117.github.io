<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src = "js/clock.js"></script>
    
<!-- Bootstrap core CSS -->
    <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Added -->
  	<script src="js/jquery.min.js"></script>
   	<script src="js/bootstrap.min.js"></script>
   	<script type="text/javascript" src = "js/form.js"></script>
    <script type="text/javascript" src = "js/onchange.js"></script>	
<!-- Favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="files/favicon.ico"/>
	<link rel="icon" type="image/png" href="files/favicon.png" />

	<title>Contact</title>
</head>
<?php
  $fName = basename(__FILE__);
?>
<body>
	<?php
		include("header.php");
		?>
	<div class = "container">
		<div class = "contacts col-sm-6 col-xs-12">
   			<h1>Contacts</h1>
   			<p>
	   			Je Seok Lee
	   			<br>
				Tel : 734-353-8789
				<br>
				<a href="mailto:jeseok@umich.edu">jeseok@umich.edu</a>
			</p>
		</div>
		<div class = "emailjeseok col-sm-6 col-xs-12">
			<form method="POST" action="process.php" onsubmit = "return validate(this)">	
			<fieldset>					
				<h1>Drop me a message</h1>
				<div class = emailform>
					<div class="username">
						<label class = "col-xs-12" for="username">Name / Organization</label><br>
						<input class = "form col-xs-12" type="text" id="username" name="username" required>
						<div class = "error"></div>
					</div>
					<br>
					<div class="email_address">
						<label class = "col-xs-12" for="email_address">Your Email address</label><br>
						<input class = "form col-xs-12" type="email" id="email_address" name="email_address" placeholder="youremail@email.com" required >
						<div class = "error"></div>
					</div>
					<br>
					<div class="email_subject">
						<label class = "col-xs-12" for="email_subject">Subject</label><br>
						<input class = "form col-xs-12" type="text" id="email_subject" name="email_subject" required>
						<div class = "error"></div>
					</div>
					<br>
					<div class="message">
						<label class = "col-xs-12" for="message">Message</label><br>
						<textarea class = "form col-xs-12" id="message" name="message" rows="5" cols="40" required></textarea>
						<div class = "error"></div>
					</div>
					<div class = "form submit_button col-xs-12">
	  					<input class="submit_button" type="submit" value= "Send E-mail" onclick="validate(form)"/>
					</div>

				</div>
				<br>					
				<br>
				

			</fieldset>
			</form>
		</div>
	</div>


	<?php
		include("footer.php");
		?>

</body>
</html>


