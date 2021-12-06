var d = new Date();
var hourNow = d.getHours();
console.log(hourNow);


//date
$(function () {});
var today = moment().format("dddd, MMMM, Do");
document.getElementById("currentDay").innerHTML = today;



//localsstorage
$(".saveBtn").click(function (event){
    event.preventDefault();
    var valuew =$(this).siblings(".plan").val();
    console.log(valuew)
    localStorage.setItem("9", valuew);
    localStorage.setItem("10", valuew);
    localStorage.setItem("11", valuew);
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

       if (Hourind == hourNow){
         $(this).addClass("present")
    
       }else if (Hourind < hourNow){
        $(this).addClass("past")

       }if (Hourind > hourNow)
       $(this).addClass("future")
         
      });
});

