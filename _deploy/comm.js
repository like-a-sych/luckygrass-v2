function doLoad1(value) {
	err = document.getElementById('cerror1');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}

function doLoad2(value) {
	err = document.getElementById('cerror2');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
function doLoad3(value) {
	err = document.getElementById('cerror3');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
function doLoad4(value) {
	err = document.getElementById('cerror4');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
function doLoad5(value) {
	err = document.getElementById('cerror5');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
function doLoad6(value) {
	err = document.getElementById('cerror6');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}

	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}
function doLoad7(value) {
	err = document.getElementById('cerror7');
	var req = new JsHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.responseJS.error == 'no') {
				err.innerHTML = ' ';
				err.innerHTML = req.responseJS.ok;
				// var url = "thank.php";
				// $(location).attr('href', url); window.location = 'thank.php';
				myModalShow();
			}
			else {
				err.innerHTML = req.responseJS.er_mess;

			}
		}
	}
	req.open(null, 'comment.php', true);
	req.send({ q: value });
}