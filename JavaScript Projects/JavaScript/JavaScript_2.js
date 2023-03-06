function checkMails () {
    let em = document.getElementById("email").value;
    let emc = document.getElementById("emailConf").value;
    if (!(em === emc)) {
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("emailConf").style.border = "2px solid red";
        alert("E-mail entries are not matching!");
    }
    else {
        document.getElementById("email").style.border = "2px solid tan";
        document.getElementById("emailConf").style.border = "2px solid tan";
    }
}