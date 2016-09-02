function makeRandomChar(){
	return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
}
function wmatrix(number = 400, delay = 60){
	var i = 0;	
	mainWm = setInterval(function(){
		if ($('.wmatrix .wm').length < number) {
			var w = Math.floor((Math.random() * $('.wmatrix').width() ) + 1);	
			var speed = Math.floor((Math.random() * 6) + 1);			
			$('.wmatrix').append('<span data-number="' + i +'" data-speed="' + speed + '" class="wm wm-' + i +' speed-' + speed +'" style="right:' + w + 'px">' + makeRandomChar() +'</span>');
			i = i + 1;						
		} else{
			clearInterval(mainWm);
		};					
	},delay);
}
function wmatrixend(){
	clearInterval(mainWm);
	$('.wmatrix .wm').remove();
}
function wmatrixpause(){
	clearInterval(mainWm);
}
function wmatrixresume(){
	wmatrix();
}