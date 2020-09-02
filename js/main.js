gsap.registerPlugin(CSSRulePlugin, ScrambleTextPlugin, ScrollToPlugin, TextPlugin);


//Smooth Scroll on Anchor Links for Mobile

function delayedJump(link) {
	gsap.to(window, {
		duration: .2,
		scrollTo: link,
		delay: .5,
		ease: "linear"
	});
};




//Logo animation and user input area fade in + expand user inputs

let logoTimeline = gsap.timeline();

gsap.set(".intro", {
	y: 0,
	opacity: 0
});

gsap.set("input", {
	width: 0,
	opacity: 0
});

logoTimeline.to('.logo-text', {
		onStart: function () {
			document.getElementById('logo-text').classList.add('cursor');
		},
		duration: 1.5,
		text: {
			value: 'Texting Test <span class="emoji">😈</span>'
		},
		ease: "none",
		onComplete: function () {
			document.getElementById('logo-text').classList.remove('cursor');
		}
	})
	.to(".logo-text", {
		delay: .5,
		onComplete: function () {
			document.getElementById('logo-text').classList.add('convert-to-logo');
		}
	})
	.to(".logo-text", {
		duration: .1,
		opacity: 1,
		x: 5,
		y: -25,
		scale: 1,
		width: 275,
	})
	.to(".logo-text", {
		duration: .5,
		y: 0,
		ease: "back"
	})
	.to(".intro", {
		delay: .1,
		duration: .25,
		y: -20,
		opacity: 1,
		ease: "back"
	})
	.to("input", {
		duration: .2,
		delay: .1,
		width: "100%",
		opacity: 1
	});




//Applies user name to questions throughout quiz

function captureUserInfo() {
	let applyUserName = document.getElementById('userName').value;
	let findSpans = document.getElementsByClassName('user-name');
	let loopSpans = findSpans.length;
	for (i = 0; i < loopSpans; i++) {
		if (applyUserName === "") {
			findSpans[i].textContent = 'Uncle Luke';
		} else {
			findSpans[i].textContent = applyUserName;
		};
	};
};



//Lifts the intro screen

function liftIntroScreen() {
	document.getElementById('intro-section').classList.add('lift-intro');
}



//Starts hand waving on player welcome screen

function beginWavingHand() {
	gsap.set("#hi", {
		rotate: 0
	});

	gsap.to("#hi", {
		duration: .1,
		rotate: 30,
		ease: "linear",
		yoyo: true,
		repeat: 16
	});
}



//Sets all above into action when "Begin Test" is clicked

const beginTestBtn = document.getElementById('begin-test-button');

beginTestBtn.addEventListener('click', () => {
	captureUserInfo();
	liftIntroScreen();
	beginWavingHand();
});



//Makes "Begin Test" button also work with enter key press

let userInputInfo = document.querySelectorAll(".user-input");

userInputInfo.forEach(function (input, index) {
	input.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			beginTestBtn.click();
		};
	});
});



//Slides over Player Welcome screen when "Begin Test" is clicked

document.getElementById('player-begin').addEventListener('click', function () {
	document.getElementById('player-instructions').classList.add('slide-left');
});



//Adds green checkmark when correct answer is selected

let correctBtn = document.querySelectorAll('.correct');

correctBtn.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		correctBtn[index].classList.remove('hands');
		correctBtn[index].classList.add('correct-clicked');
	});
});



//Apply user phone number to winning number display

function displayPrizeNumber() {
	let applyUserNumber = document.getElementById('userNumber').value;
	let numtext = document.querySelector('.prize');

	if (applyUserNumber === "") {
		numtext.textContent = "555-555-5555";
	} else {
		numtext.textContent = applyUserNumber;
	};

	let tl = gsap.timeline();

	tl.to(".congrats-text", {
			duration: .25,
			y: -20,
			opacity: 1,
			ease: "back"
		})
		.to(".prize", {
			delay: 1,
			opacity: 1
		})
		.to(".prize", {
			duration: 2.5,
			scrambleText: {
				text: applyUserNumber,
				chars: "1234567890",
				oldClass: "old",
				newClass: "cool"
			}
		}, "-=.5")
		.to(".prize", {
			duration: .5,
			scale: 1.2,
			ease: "bounce"
		});
};



//Jumps to and displays winning number

function winningClick() {
	gsap.to(window, {
		duration: .01,
		scrollTo: "#congrats",
		ease: "linear"
	})
	setTimeout(displayPrizeNumber, 800);
};