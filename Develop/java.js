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
    var valuex =$(this).parent().attr("id");
    console.log(valuew)
    localStorage.setItem(valuex, valuew);
 
})
$("#09 .plan").val(localStorage.getItem("09"));
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#13 .plan").val(localStorage.getItem("13"));
$("#14 .plan").val(localStorage.getItem("14"));
$("#15 .plan").val(localStorage.getItem("15"));
$("#16 .plan").val(localStorage.getItem("16"));
$("#17 .plan").val(localStorage.getItem("17"));


//color
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

