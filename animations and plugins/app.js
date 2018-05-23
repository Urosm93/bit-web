$(function removeBorder () {
   var $addClass =  $(".selected").removeClass("selected").parent().next();
   $addClass.find(":nth-child(2)").addClass("selected");;
});