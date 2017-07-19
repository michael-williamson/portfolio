var $mainWrapper = $(".main-wrapper");
var $aboutImg   = $("#about-image");
var $aboutDescription = $("#about-description");
var $ajaxOverlay = $("#ajax-overlay");
var $quizOverlay = $("#quiz-overlay");
var $formOverlay = $("#form-overlay");
var $lightboxOverlay = $("#lightbox-overlay");
var $mediaOverlay = $("#media-overlay");
var $svgOverlay = $("#svg-overlay");
var $gameOverlay = $("#game-overlay");
var $livewellOverlay = $("#livewell-overlay");
var $yogaOverlay = $("#yoga-overlay");


function coverRemove(yScrollPos,offset,overlay){
    if(yScrollPos > (offset - 400)) {
        overlay.addClass("slide-up");
    }
    if(yScrollPos > (offset - 200)) {
        overlay.addClass("slide-away");
        overlay.fadeOut(500);
    }

}




$(window).on('scroll', function() {
    var yScrollPos = window.pageYOffset;
    var height = $mainWrapper.height();

    if(yScrollPos > (height - 300)) {
        $aboutImg.addClass("in-view");
    }
    if(yScrollPos > (height - 200)) {  
        $aboutDescription.fadeIn("slow");
    }
  
    //   var $ajaxOffset = $ajaxOverlay.offset().top;
    // coverRemove(yScrollPos,$ajaxOffset,$ajaxOverlay);

    var $yogaOffset = $yogaOverlay.offset().top;
    coverRemove(yScrollPos,$yogaOffset,$yogaOverlay);

    var $gameOffset = $gameOverlay.offset().top;
    coverRemove(yScrollPos,$gameOffset,$gameOverlay);

    var $livewellOffset = $livewellOverlay.offset().top;
    coverRemove(yScrollPos,$livewellOffset,$livewellOverlay);
  
      var $quizOffset = $quizOverlay.offset().top;
    coverRemove(yScrollPos,$quizOffset,$quizOverlay);

      var $formOffset = $formOverlay.offset().top;
      coverRemove(yScrollPos,$formOffset,$formOverlay);

      var $lightboxOffset = $lightboxOverlay.offset().top;
    coverRemove(yScrollPos,$lightboxOffset,$lightboxOverlay);

      var $mediaOffset = $mediaOverlay.offset().top;
    coverRemove(yScrollPos,$mediaOffset,$mediaOverlay);
  
      var $svgOffset = $svgOverlay.offset().top;
    if(yScrollPos > ($svgOffset - 400)) {
        $svgOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($svgOffset - 300)) {
        $svgOverlay.addClass("slide-away");
        $svgOverlay.fadeOut(500);
    }
    
});

