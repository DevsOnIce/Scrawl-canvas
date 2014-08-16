var mycode = function() {
	'use strict';
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');

	//define variables
	var myPad = scrawl.pad.mycanvas,
		here,
		myScale,
		myWheel,
		mouse;

	//setup canvas
	scrawl.canvas.mycanvas.style.cursor = 'crosshair';

	//define sprite
	myWheel = scrawl.newWheel({
		strokeStyle: 'Red',
		fillStyle: 'Blue',
		radius: 50,
		lineWidth: 2,
		scaleOutline: false,
		pivot: 'mouse',
		method: 'fillDraw',
	});

	//animation function
	mouse = function() {
		myScale = (50 - Math.floor(((Math.abs(here.y - 187.5) / 187.5) * 24) + ((Math.abs(here.x - 375) / 375) * 24))) / 25;
		myWheel.set({
			scale: myScale,
		});
	};

	//animation object
	scrawl.newAnimation({
		fn: function() {
			here = myPad.getMouse();
			if (here.active) {
				mouse();
				scrawl.render();
			}
			else {
				scrawl.clear('display');
			}

			testNow = Date.now();
			testTime = testNow - testTicker;
			testTicker = testNow;
			testMessage.innerHTML = 'Milliseconds per screen refresh: ' + Math.ceil(testTime) + '; fps: ' + Math.floor(1000 / testTime);
		},
	});
};

scrawl.loadModules({
	path: '../source/',
	minified: false,
	modules: ['animation', 'wheel'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});