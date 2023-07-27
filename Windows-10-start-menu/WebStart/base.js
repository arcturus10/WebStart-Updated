function ShowDate(){
document.getElementById("dateview").innerHTML = Date();
setTimeout("ShowDate()", 1000);
}
