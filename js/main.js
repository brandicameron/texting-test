gsap.registerPlugin(
  CSSRulePlugin,
  ScrambleTextPlugin,
  ScrollToPlugin,
  TextPlugin
);

//Smooth scroll on anchor links for mobile
function delayedJump(link) {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: link,
    delay: 0.5,
    ease: 'linear',
  });
}

// ANIMATIONS

const introPageAnimations = gsap.timeline();

function logoText() {
  let tl = gsap.timeline();
  tl.to('.logo-text', {
    onStart: function () {
      document.getElementById('logo-text').classList.add('cursor');
    },
    duration: 1.5,
    text: {
      value: 'Texting Test <span class="emoji">😈</span>',
    },
    ease: 'none',
    onComplete: function () {
      document.getElementById('logo-text').classList.remove('cursor');
    },
  })
    .to('.logo-text', {
      delay: 0.5,
      onComplete: function () {
        document.getElementById('logo-text').classList.add('convert-to-logo');
      },
    })
    .to('.logo-text', {
      duration: 0.1,
      opacity: 1,
      x: 5,
      y: -25,
      scale: 1,
      width: 275,
    })
    .to('.logo-text', {
      duration: 0.5,
      y: 0,
      ease: 'back',
    });
  return tl;
}

function introText() {
  let tl = gsap.timeline();
  tl.to('.intro', {
    delay: 0.1,
    duration: 0.25,
    y: -20,
    opacity: 1,
    ease: 'back',
  });
  return tl;
}

function slideOverInputs() {
  let tl = gsap.timeline();
  tl.to('.slide', {
    duration: 0.2,
    delay: 0.1,
    width: '100%',
    opacity: 1,
  });
  return tl;
}

introPageAnimations.add(logoText());
introPageAnimations.add(introText());
introPageAnimations.add(slideOverInputs());

//Button to hide or show phone number in input
function viewHiddenPhone() {
  let numberInput = document.getElementById('userNumber');
  let hideShowNumber = document.getElementById('hide-show-number');

  if (numberInput.type == 'password') {
    numberInput.type = 'text';
    hideShowNumber.className = 'fa fa-eye-slash';
  } else {
    numberInput.type = 'password';
    hideShowNumber.className = 'fa fa-eye';
  }
}

//Apply user name to all the questions
function applyUsernameToQuestions() {
  let applyUserName = document.getElementById('userName').value;
  let findSpans = document.getElementsByClassName('user-name');
  let loopSpans = findSpans.length;
  for (i = 0; i < loopSpans; i++) {
    if (applyUserName === '') {
      findSpans[i].textContent = 'Uncle Luke';
    } else {
      findSpans[i].textContent = applyUserName;
    }
  }
}

function liftIntroScreen() {
  document.getElementById('intro-section').classList.add('lift-intro');
}

function beginWavingHand() {
  gsap.set('#hi', {
    rotate: 0,
  });

  gsap.to('#hi', {
    duration: 0.1,
    rotate: 30,
    ease: 'linear',
    yoyo: true,
    repeat: 16,
  });
}

//Sets above into action when "Begin Test" is clicked
const beginTestBtn = document.getElementById('begin-test-button');

beginTestBtn.addEventListener('click', () => {
  applyUsernameToQuestions();
  liftIntroScreen();
  beginWavingHand();
});

//Makes "Begin Test" button also work with enter key press
const userInputInfo = document.querySelectorAll('.user-input');

userInputInfo.forEach(function (input, index) {
  input.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      beginTestBtn.click();
    }
  });
});

//Slide over player instruction page on button click
const PlayerBeginBtn = document.getElementById('player-begin-button');
const PlayerInstructionsPage = document.getElementById('player-instructions');

PlayerBeginBtn.addEventListener('click', function () {
  PlayerInstructionsPage.classList.add('slide-left');
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

  if (applyUserNumber === '') {
    numtext.textContent = '555-555-5555';
  } else {
    numtext.textContent = applyUserNumber;
  }

  let tl = gsap.timeline();
  tl.to('.congrats-text', {
    duration: 0.25,
    y: -20,
    opacity: 1,
    ease: 'back',
  })
    .to(
      '.thumbsup',
      {
        duration: 0.5,
        fontSize: 60,
        yoyo: true,
        ease: 'bounce',
      },
      '-=.1'
    )
    .to('.prize', {
      delay: 1,
      opacity: 1,
    })
    .to(
      '.prize',
      {
        duration: 2.5,
        scrambleText: {
          text: applyUserNumber,
          chars: '1234567890',
          oldClass: 'old',
          newClass: 'cool',
        },
      },
      '-=.5'
    )
    .to('.prize', {
      duration: 0.5,
      scale: 1.2,
      ease: 'elastic',
    });
}

//Jumps to and displays winning number + starts confetti
function winningClick() {
  document.querySelector('.correct').classList.add('correct-clicked');
  gsap.to(window, {
    duration: 0.2,
    scrollTo: '#congrats',
    delay: 0.5,
    ease: 'linear',
  });
  setTimeout(startConfetti, 700);
  setTimeout(displayPrizeNumber, 1500);
}
