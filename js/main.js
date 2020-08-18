//Applying user's name to questions and lift intro section when "Begin Test" is clicked


const body = document.getElementById('body');
const beginTestBtn = document.getElementById('begin-test-button');

function captureUserInfo() {
	let applyUserName = document.getElementById('userName').value;
	let applyUserNumber = document.getElementById('userNumber').value;
	let findSpans = document.getElementsByClassName('user-name');
	let loopSpans = findSpans.length;
	for (i = 0; i < loopSpans; i++) {
		findSpans[i].textContent = applyUserName;
	};
	//lifts intro screen after user info is submitted
	document.getElementById('intro-section').classList.add('lift-intro');
	document.getElementById('hi').classList.add('wave');
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



//this delay gives time for the checkmark animation to be seen before moving to the next question
function delayedJump(link) {
	body.classList.remove('overflow');
	setTimeout(function(){
		window.location.href = link;
	}, 700);
	body.classList.add('overflow');
}


//function delayedJump(link) {
//	setTimeout(function(){
//		window.location.href = link;
//	}, 700);
//}


//Adds green checkmark when correct answer is selected
let correctBtn = document.querySelectorAll('.correct');
let correctMulti = document.querySelectorAll('.correct-answer-multi');

correctBtn.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		correctBtn[index].classList.add('correct-clicked');
	});
});

correctMulti.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		correctMulti[index].classList.add('correct-clicked-multi');
	});
});