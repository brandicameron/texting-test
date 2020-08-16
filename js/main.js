//Applying user's name to questions and lift intro section when "Begin Test" is clicked

const beginTestBtn = document.getElementById('begin-test-intro');

function captureUserInfo() {
	let applyUserName = document.getElementById("userName").value;
	let findSpans = document.getElementsByClassName("user-name");
	let loopSpans = findSpans.length;
	for (i = 0; i < loopSpans; i++) {
		findSpans[i].textContent = applyUserName;
	};
	document.getElementById("intro-section").classList.add('lift-intro');
	//if player is in the middle of answering questions and refreshes to go back to the beginning, this will reset to the instruction page after the intro page
	window.location.href = '#player-instructions';
//	document.getElementById("body").classList.remove('overflow');
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