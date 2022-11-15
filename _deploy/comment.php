<?php
session_start();
//require_once dirname(__FILE__) . "/libs/SendAmo.php";
// Запрет на кэширование
header("Expires: Mon, 23 May 1995 02:00:00 GTM");
header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
//****

$log =="";
$error="no"; //флаг наличия ошибки

require_once 'JsHttpRequest.php';
$JsHttpRequest = new JsHttpRequest("UTF-8");

//Короткие имена переменных и обрезка пробелов img_title
$from = trim($_POST['from']);
$fr = trim($_POST['fr']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);

$question1 = trim($_POST['question-1']);
$question2 = trim($_POST['question-2']);
$question3 = trim($_POST['question-3']);
$question4 = trim($_POST['question-4']);



/*
$utm_source = $_COOKIE['utm_source'];
$utm_medium = $_COOKIE['utm_medium'];
$utm_campaign = $_COOKIE['utm_campaign'];
$utm_content = $_COOKIE['utm_content'];
$utm_term = $_COOKIE['utm_term'];
*/
//Проверка наличия введенного текста комментария
if (empty($phone))
{
	$log .= "<li>Необходимо указать номер телефона!</li>";
	$error = "yes";
}

/*
//Проверка наличия введенного текста комментария
if (empty($name))
{
    $log .= "<li>Необходимо указать имя!</li>";
    $error = "yes";
}
*/

//Если нет ошибок отправляем email
if($error=="no")
{
	if ($_POST['token'] == $_SESSION['lastToken']) {
	} else {
		$_SESSION['lastToken'] = $_POST['token'];
$prov = 0;
setcookie('phone', $phone);
$_COOKIE['phone'] = $phone;

//Отправка письма админу о новом комментарии
$emailadmin = 'avocode.web01@yandex.ru';//e-mail админа


$mes = "Заявка с сайта Luckygrass_test
--------------------------------------------------\n";
if ($post_url) {
    $mes .= "Сайт: $post_url \n";
}
if ($post_title) {
    $mes .= "Название: $post_title \n";
}
if ($from) {
    $mes .= "Заявка с формы: $from \n";
}
if ($fr) {
	$mes .= "$fr \n";
}
if ($name) {
    $mes .= "Имя: $name \n";
}
if ($phone) {
    $mes .= "Телефон: $phone \n";
}
if ($textarea) {
	$mes .= "Текст: $textarea \n";
}
if ($question1) {
    $mes .= "01. Где вы проводите матчи?\n $question1 \n";
}
if ($question2) {
    $mes .= "02. Какое количество формы вам необходимо заказать?\n $question2 \n";
}
if ($question3) {
	$mes .= "03. В какой срок необходимо произвести и доставить форму?\n $question3 \n";
}
if ($question4) {
	$mes .= "04. Вам необходимо разработать дизайн или у вас есть готовое ТЗ?\n $question4 \n";
}
$mes .= "---------------------------------------\n";

// $from = "Заявка";

$to = $emailadmin;
$sub = '=?UTF-8?B?'.base64_encode('Заявка с сайта luckygrass.dmgug.ru').'?=';
$headers = 'From: luckygrass.dmgug.ru
';
$headers .= 'MIME-Version: 1.0
';
$headers .= 'Content-type: text/plain; charset=UTF-8
';
mail($to, $sub, $mes, $headers);
//****

// $ok ="<div class='ok'><strong>толькСпасибо! Мы перезвоним вам, в ближайшее время!</strong></div>";

//Помещаем результат в массив
$GLOBALS['_RESULT'] = array(
'error' => 'no',
'text' => $name,
'ok' => $ok
);

// // AmoCRM integration
// $amo_msg = "Заявка с сайта SIPUNI" . PHP_EOL;
// $amo_msg .= "Форма обратной связи: " . $from . PHP_EOL;
// if (!empty($phone)) { $amo_msg .= 'Телефон: '.$phone.PHP_EOL; }
// $sendAmo = new SendAmo("", $phone, "", $amo_msg);
// $sendAmo->setUTM($_COOKIE["utm_source"], $_COOKIE["utm_medium"], $_COOKIE["utm_campaign"], $_COOKIE["utm_content"], $_COOKIE["utm_term"]);
// $sendAmo->start();
// // END AmoCRM integration

//****
}}
else//если ошибки есть
{
$log = "<ul class='no'>".$log."</ul>";

//Отправляем результат в массив
$GLOBALS['_RESULT'] = array(
'error' => 'yes',
'er_mess' => $log);
}
?>
