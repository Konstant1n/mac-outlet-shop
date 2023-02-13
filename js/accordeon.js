$(function () {

  $(".accordion h4:first").addClass("active");
  $(".accordion .panel:not(:first)").hide();

  $(".accordion h4").click(function () {
    $(this).next(".panel").slideToggle("slow")
      .siblings(".panel:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h4").removeClass("active");
  });

});