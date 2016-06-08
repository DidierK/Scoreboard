$(document).ready(function() {

  $(".admincheck").css("display","none");

  $("#admin_password").keyup(function(){

    if (this.value == "admin") {
              $(".admincheck").css("display", "block");
          }
          else {
              $(".admincheck").css("display", "none");
          }
  });
});
