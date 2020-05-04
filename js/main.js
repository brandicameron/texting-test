
let correctBtn = Array.prototype.slice.call(document.querySelectorAll('.correct-button'));
let correctBtnMulti = Array.prototype.slice.call(document.querySelectorAll('.correct-button-multi'));
let correctAnswerCheck = Array.prototype.slice.call(document.querySelectorAll('.correct-answer'));
let correctAnswerCheckMulti = Array.prototype.slice.call(document.querySelectorAll('.correct-answer-multi'));
	
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

