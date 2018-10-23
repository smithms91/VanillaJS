$(document).ready(function() {
  $(".hidden").hide();

  $(".material-icons").click(function() {
    $(".search input").fadeToggle();
  });
    
  $(".nested.blog").click(function() {
    $(".hidden.gallery").slideUp();
    $(".hidden.features").slideUp();
    $(".hidden.blog").slideToggle();
  });

  $(".nested.gallery").click(function() {
    $(".hidden.blog").slideUp();
    $(".hidden.features").slideUp();
    $(".hidden.gallery").slideToggle();
  });

  $(".nested.features").click(function() {
    $(".hidden.gallery").slideUp();
    $(".hidden.blog").slideUp();
    $(".hidden.features").slideToggle();
  });
  
});