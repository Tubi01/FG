function scaleItframe(ratio, originalWidth, originalHeight) {
  var scalePhoto = chekbr().getElementById('image_line');
  v = originalWidth * (ratio/100);
  h = originalHeight * (ratio/100);
  scalePhoto.style.width = Math.floor(v) + 'px';
  scalePhoto.style.height = Math.floor(h) + 'px';
 
}

function saveChangeframe() {
//  var theWidth = $('cropImage').style.width;
//  theWidth = theWidth.substring(0,(theWidth.length-2));
//  $('resizeWidth').value = theWidth;
 }

function initSliderframe() {
    slider2=new Control.Slider('resizeHandleb','resizeTrackb',{ 
    axis:'vetical', 
    range:$R(0,200), 
    sliderValue:100,
    onSlide: function(v) {scaleItframe(v,$('im_w').value,$('im_h').value);},
    onChange: function(v) {saveChangeframe();}      
  });
	
}

//Event.observe(window, 'load', function() { initSlider() });