$(document).foundation();

$(function() {
  var feed = new Instafeed({
	        get: 'user',
	        userId: '4841909653',
	        accessToken: '4841909653.1677ed0.baae871499174b5daac3d28e2e71922e',
	        template: '<div class="cell"><div class="item"><a href="{{link}}"><img src="{{image}}" alt="{{caption}}"></a><div class="item__title text-center" data-aos="fade-in">{{caption}}</div></div></div>',
	        resolution: 'standard_resolution'
    });
    feed.run();
})