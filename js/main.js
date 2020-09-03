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

const logoTimeline = gsap.timeline();

gsap.set(".intro", {
	y: 0,
	opacity: 0
});

gsap.set(".slide", {
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
	.to(".slide", {
		duration: .2,
		delay: .1,
		width: "100%",
		opacity: 1
	});


function viewHiddenPhone() {
  let numberInput = document.getElementById('userNumber');
  let hideShowNumber = document.getElementById('hide-show-number');
 
  if (numberInput.type == 'password'){
    numberInput.type='text';
    hideShowNumber.className='fa fa-eye-slash';
    
  }
  else{
    numberInput.type='password';
    hideShowNumber.className='fa fa-eye';
  }
};


function applyUserInfo() {
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


function liftIntroScreen() {
	document.getElementById('intro-section').classList.add('lift-intro');
};


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
};


//Sets above into action when "Begin Test" is clicked

const beginTestBtn = document.getElementById('begin-test-button');

beginTestBtn.addEventListener('click', () => {
	applyUserInfo();
	liftIntroScreen();
	beginWavingHand();
});


//Makes "Begin Test" button also work with enter key press

const userInputInfo = document.querySelectorAll(".user-input");

userInputInfo.forEach(function (input, index) {
	input.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			beginTestBtn.click();
		};
	});
});


document.getElementById('player-begin-button').addEventListener('click', function () {
	document.getElementById('player-instructions').classList.add('slide-left');
});



//Adds green checkmark when correct answer is selected

const correctBtn = document.querySelectorAll('.correct');

correctBtn.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		correctBtn[index].classList.remove('hands');
		correctBtn[index].classList.add('correct-clicked');
	});
});


function displayPrizeNumber() {
	let applyUserNumber = document.getElementById('userNumber').value;
	let numtext = document.querySelector('.prize');

	if (applyUserNumber === "") {
		numtext.textContent = "555-555-5555";
	} else {
		numtext.textContent = applyUserNumber;
	};

	const tl = gsap.timeline();
	
	tl.to(".congrats-text", {
			duration: .25,
			y: -20,
			opacity: 1,
			ease: "back"
		})
	.to(".thumbsup", {
		duration: .5,
		fontSize: 60,
		yoyo: true,
		ease: "bounce"
	},"-=.1")
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
			ease: "elastic"
		});
};


//Jumps to and displays winning number

function winningClick() {
	
document.querySelector('.correct').classList.add('correct-clicked');
	
	gsap.to(window, {
		duration: .2,
		scrollTo: "#congrats",
		delay: .5,
		ease: "linear"
	});
	
	setTimeout(displayPrizeNumber, 1500);
};