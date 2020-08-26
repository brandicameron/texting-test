gsap.registerPlugin(CSSRulePlugin, ScrambleTextPlugin, ScrollToPlugin);


//Applying user's information to questions and prize page, and lifting intro section when "Begin Test" is clicked

const beginTestBtn = document.getElementById('begin-test-button');

function captureUserInfo() {
	let applyUserName = document.getElementById('userName').value;
	let applyUserNumber = document.getElementById('userNumber').value;
	let findSpans = document.getElementsByClassName('user-name');
	let loopSpans = findSpans.length;
	for (i = 0; i < loopSpans; i++) {
		if (applyUserName === "") {
			findSpans[i].textContent = 'Uncle Luke';
		} else {
			findSpans[i].textContent = applyUserName;
		};

		const finalAnswerButton = document.getElementById('winner');

		finalAnswerButton.addEventListener('click', function () {
			gsap.to(".prize", {
				delay: 1,
				duration: 3,
				scrambleText: applyUserNumber
			});
		});
	};

	//lifts intro screen after user info is submitted

	document.getElementById('intro-section').classList.add('lift-intro');

	//if player is in the middle of answering questions and refreshes to go back to the beginning, this will reset to the instruction page after the intro page
	window.location.href = '#player-instructions';


	//begin waving hand
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

beginTestBtn.addEventListener('click', captureUserInfo);






//Make submit button work with enter key press also

let userInputInfo = document.querySelectorAll(".user-input");

userInputInfo.forEach(function (input, index) {
	input.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			beginTestBtn.click();
		};
	});
});





//typing event

const typing = document.getElementById('typing');

for (let element of document.querySelectorAll(".typing")) {
	let length = element.textContent.length;
	element.style.setProperty("--length", length);
}

function removeCursor() {
	typing.classList.remove('typing-animation');
}

typing.addEventListener("animationend", removeCursor);





//logo animation

let tl = gsap.timeline();

function addLogo() {
	document.getElementById('logo-container').classList.add('logo-background');
}


function removeText() {
	document.getElementById('typing').classList.add('hide');
}

function replaceText() {
	document.getElementById('logo-text').classList.add('make-visible');
}

tl.to(".logo-container", {
	duration: .04,
	x: 15,
	y: -15,
	ease: "bounce",
	delay: 1.9
});

tl.to(".logo-container", {
	duration: .09,
	y: -225,
	ease: "ease-out",
	onStart: addLogo,
	opacity: 1,
	scale: 1
});

tl.to(".typing", {
	duration: 0.01,
	onStart: removeText
}, "-=0.1");


tl.to(".typing", {
	duration: 0.01,
	onStart: replaceText
});


//user input section fade in/up

gsap.set(".intro", {
	y: 0,
	opacity: 0
});

gsap.to(".intro", {
	duration: .25,
	delay: 2.75,
	y: -20,
	opacity: 1
});



//expanding user inputs

gsap.set("input", {
	width: 0,
	opacity: 0
});

gsap.to("input", {
	duration: .2,
	delay: 3.3,
	width: "100%",
	opacity: 1
});




//slides over instructions when "Begin Test" is clicked
let playerBegin = document.getElementById('player-begin');

playerBegin.addEventListener('click', function () {
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


//Mobile ViewHeight Calculator
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});



//Smooth Scroll on Anchor Links for Mobile
function delayedJump(link) {
	gsap.to(window, {
		duration: .2,
		scrollTo: link,
		delay: .5,
		ease: "linear"
	});
};

//Winning Number




//const finalAnswerButton = document.getElementById('winner');
//
//finalAnswerButton.addEventListener('click', function() {
//	gsap.to(".prize", {
//			delay: 1,
//			duration: 3,
//			chars: "XXXXOOOOXXXXOOOO",
//			scrambleText: applyUserNumber
//		});
//});