
let correctBtn = Array.prototype.slice.call(document.querySelectorAll('.correct-button'));
let correctAnswerCheck = Array.prototype.slice.call(document.querySelectorAll('.correct-answer'));
	
	correctBtn.forEach(function(btn, index) {
		btn.addEventListener('click', function() {
			correctAnswerCheck[index].classList.add('correct-clicked');
		});
	});



//window.onload = function() {
//let correctBtn = Array.prototype.slice.call(document.querySelectorAll('.correct-button'));
//let correctAnswerCheck = Array.prototype.slice.call(document.querySelectorAll('.correct-answer'));
//	
//	correctBtn.forEach(function(btn, index) {
//		btn.addEventListener('click', function() {
//			correctAnswerCheck[index].classList.add('correct-clicked');
//		})
//	})
//};