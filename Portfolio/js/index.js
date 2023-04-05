const formPanel = document.getElementById("formPanel").style;
const formBtn = document.getElementById("formBtn").style;
function formOpen () {
    formBtn.animationName = "fallBtn";
    setTimeout(function() { formBtn.display = "none"; display: "none"; }, 1000);
    formPanel.animationName = "formPanelON";
    formPanel.display = "block";
}

function formClose () {
    formBtn.display = "block";
    formBtn.animationName = "liftBtn";
    formPanel.animationName = "formPanelOFF";
    setTimeout( function () { formPanel.display = "none"; }, 1000);

}