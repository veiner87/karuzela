$(function () {
  var carouselList = $("#carousel ul");

  $(".right").on("click", function(event) {
    changeSlide();
  });

  $(".left").on("click", function(event) {
    // $(".left").css('float', 'right'); - TO JEDNAK SPRAWY NIE ZAŁATWIA
    moveLastSlide();
    // changeSlide();
  });

  function changeSlide () {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }
  function moveFirstSlide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0}); 
  }
  setInterval(changeSlide, 3000);

  function moveLastSlide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-400}); 
    carouselList.animate({'marginLeft':0}, 500);
  }
});
