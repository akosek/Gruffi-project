
/*var button1 = document.getElementById('bregister');
var rForm = document.getElementById("rForm");

function toggle() {
		rForm.style.visibility = rForm.style.visibility === "hidden" ? "visible" :  "hidden";
}

toggle();

button1.addEventListener("click", toggle, false);

*/

$(document).ready(function(){
    $("#bregister").click(function(){
        $("#la").toggle();
    });
});
