gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin);


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
		}	
		let displayNumber = document.getElementById('prize');
		displayNumber.textContent = applyUserNumber;
	};
	
	//lifts intro screen after user info is submitted
	document.getElementById('intro-section').classList.add('lift-intro');

	//if player is in the middle of answering questions and refreshes to go back to the beginning, this will reset to the instruction page after the intro page
	window.location.href = '#player-instructions';
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



//slides over instructions when "Begin Test" is clicked
let playerBegin = document.getElementById('player-begin');

playerBegin.addEventListener('click', function () {
	document.getElementById('player-instructions').classList.add('slide-left');
});



//Adds green checkmark when correct answer is selected
let correctBtn = document.querySelectorAll('.correct');

correctBtn.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		correctBtn[index].classList.add('correct-clicked');
		correctBtn[index].classList.remove('hands');
	});
});



//this delay gives time for the checkmark animation to be seen before moving to the next question
//function delayedJump(link) {
//	setTimeout(function () {
//		window.location.href = link;
//	}, 700);
//}


//Celebrations




//Mobile ViewHeight Calculator

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


let question2 = document.getElementById('question2');
const answer1 = document.getElementById('answer1');




function delayedJump(link) {
	gsap.to(window, {
	duration: .3,
	scrollTo: link,
	ease: "power2",
	delay: .5
});
	
}


//answer1.addEventListener('click', () => {
//	gsap.to(window, {
//	duration: .3,
//	scrollTo: question2,
//	ease: "power2",
//	delay: .5
//});
//});



	













