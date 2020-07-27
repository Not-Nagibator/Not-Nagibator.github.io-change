function setVerified() {
	var expiration_date = new Date();
	var age_verify = '';
	expiration_date.setFullYear(expiration_date.getFullYear() + 1);
	age_verify = "age_verification=true; expires=" + expiration_date.toUTCString(); + " path=/;"
	document.cookie = age_verify;
	document.location.href = "index.html";
	
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function checkVerified() {
    var myCookie = getCookie("age_verification");

    if (myCookie == null) {
        document.location.href = "age_verify.html";
    }
}