var $mainWrapper = $(".main-wrapper");
var $aboutImg   = $("#about-image");
var $aboutDescription = $("#about-description");
var $ajaxOverlay = $("#ajax-overlay");
var $formOverlay = $("#form-overlay");
var $lightboxOverlay = $("#lightbox-overlay");
var $mediaOverlay = $("#media-overlay");
var $svgOverlay = $("#svg-overlay");

$(window).on('scroll', function() {
    var yScrollPos = window.pageYOffset;
    var height = $mainWrapper.height();

    if(yScrollPos > (height - 300)) {
        $aboutImg.addClass("in-view");
    }
    if(yScrollPos > (height - 200)) {
        $aboutDescription.fadeIn("slow");
    }
  
      var $ajaxOffset = $ajaxOverlay.offset().top;
    if(yScrollPos > ($ajaxOffset - 400)) {
        $ajaxOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($ajaxOffset - 200)) {
        $ajaxOverlay.addClass("slide-away");
        $ajaxOverlay.fadeOut(500);
    }

      var $formOffset = $formOverlay.offset().top;
    if(yScrollPos > ($formOffset - 400)) {
        $formOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($formOffset - 200)) {
        $formOverlay.addClass("slide-away");
        $formOverlay.fadeOut(500);
    }

      var $lightboxOffset = $lightboxOverlay.offset().top;
    if(yScrollPos > ($lightboxOffset - 400)) {
        $lightboxOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($lightboxOffset - 200)) {
        $lightboxOverlay.addClass("slide-away");
        $lightboxOverlay.fadeOut(500);
    }

      var $mediaOffset = $mediaOverlay.offset().top;
    if(yScrollPos > ($mediaOffset - 400)) {
        $mediaOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($mediaOffset - 200)) {
        $mediaOverlay.addClass("slide-away");
        $mediaOverlay.fadeOut(500);
    }
  
      var $svgOffset = $svgOverlay.offset().top;
    if(yScrollPos > ($svgOffset - 400)) {
        $svgOverlay.addClass("slide-up");
    }
    if(yScrollPos > ($svgOffset - 300)) {
        $svgOverlay.addClass("slide-away");
        $svgOverlay.fadeOut(500);
    }
    
});

