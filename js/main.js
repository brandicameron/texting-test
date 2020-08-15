//Applying user's name to questions and lift intro section when "Begin Test" is clicked

const beginTestBtn = document.getElementById('begin-test');

function captureUserName() {
	let applyUserName = document.getElementById("userName").value;
	let findSpans = document.getElementsByClassName("user-name");
	let loopSpans = findSpans.length;
	for (i = 0; i < loopSpans; i++) {
		findSpans[i].innerHTML = applyUserName;
	};
	document.getElementById("section1").classList.add('lift-intro');
	document.getElementById("body").classList.remove('no-overflow');
};

beginTestBtn.addEventListener('click', captureUserName);


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