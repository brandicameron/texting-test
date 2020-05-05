
//Adds green checkmark when correct answer is selected
let correctBtn = document.querySelectorAll('.correct');
let correctBtnMulti = document.querySelectorAll('.correct-button-multi');
let correctAnswerCheck = document.querySelectorAll('.correct-answer');
let correctAnswerCheckMulti = document.querySelectorAll('.correct-answer-multi');
	
	correctBtn.forEach(function(btn, index) {
		btn.addEventListener('click', function() {
			correctAnswerCheck[index].classList.add('correct-clicked');
		});
	});

	correctBtnMulti.forEach(function(btn, index) {
		btn.addEventListener('click', function() {
			correctAnswerCheckMulti[index].classList.add('correct-clicked-multi');
		});
	});



//Scroll animations
let scroll = window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};

let animationTarget = document.querySelectorAll('.animate');

function loop() {
	animationTarget.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('fancy');
		} else {
			element.classList.remove('fancy');
		}
	});
	scroll(loop);
}

loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 &&
			rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}
