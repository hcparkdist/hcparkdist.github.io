<?php

	include dirname(dirname(__FILE__)).'/mail.php';

	error_reporting (E_ALL ^ E_NOTICE);

	$post = (!empty($_POST)) ? true : false;

	
	if($post) {
		
		//Mail Validate
		function ValidateEmail($value) {
			$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

			if($value == '') { 
				return false;
			} else {
				$string = preg_replace($regex, '', $value);
			}

			return empty($string) ? true : false;
		}

		
		$fname = stripslashes($_POST['fname']);
		$lname = stripslashes($_POST['lname']);
		$email = trim($_POST['email']);
		$message = "You got the book from your website from: \n".$fname." \n".$lname." \n\n".$email;


		$error = '';

		
		// Check first name
		if(!$fname) {
			$error .= 'Please enter your first name.<br />';
		}
		
		// Check last name
		if(!$lname) {
			$error .= 'Please enter your last name.<br />';
		}

		// Check email
		if(!$email) {
			$error .= 'Please enter an e-mail address.<br />';
		}

		if($email && !ValidateEmail($email)) {
			$error .= 'Please enter a valid e-mail address.<br />';
		}


		if(!$error) {
			$mail = mail(CONTACT_FORM, $subject, $message,
			"From: ".$fname." <".$email.">\r\n"
			."Reply-To: ".$email."\r\n"
			."X-Mailer: PHP/" . phpversion());

			if($mail) {
				echo 'OK';
			}

		} else {
			echo '<div class="notification_error">'.$error.'</div>';
		}

	}
?>