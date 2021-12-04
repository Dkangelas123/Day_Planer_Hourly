var d = new Date();
var today = new Date();
var time = today.getHours


document.getElementById("currentDay").innerHTML = d;

$(".saveBtn").click(function (event){
    event.preventDefault();
    var valuew =$(this).siblings(".plan").val();
    console.log(valuew)
    localStorage.setItem("9", valuew);
    localStorage.setItem("10", valuew);
})
$("#9 .plan").val(localStorage.getItem("9"));
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#1 .plan").val(localStorage.getItem("1"));
$("#2 .plan").val(localStorage.getItem("2"));

$( document ).ready(function() {
    $( ".time-block" ).each(function( index ) {
        var Hourind = 
        $( this ).attr('id');
        console.log(Hourind)

      });
});

