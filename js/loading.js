var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 3000,
	strokeWidth: 100,
	color: '#dddddd',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {			
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'4em',
			color: '#BFBFBF',
			'font-family': 'futura-pt, sans-serif',
			'font-weight': '500',
			'font-style': 'italic'
		},
		autoStyleContainer: false 
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
});

bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loader_cover-up").addClass("coveranime");
	$(".loader_cover-down").addClass("coveranime");
	$("#splash").fadeOut();
});
