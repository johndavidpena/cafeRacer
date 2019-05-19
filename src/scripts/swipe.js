// console.log('Swipe');
// https://www.youtube.com/watch?v=bV9idMbioqg

const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
var startingX;
// Nav Dots
const dot1 = document.querySelector('#navDot1');
const dot2 = document.querySelector('#navDot2');
const dot3 = document.querySelector('#navDot3');
const brown = '#96806C';
const grey = '#CCCCCC';

function handleDot1() {
  dot1.style.background = brown;
  dot2.style.background = grey;
  dot3.style.background = grey;

  image1.style.display = 'block';
  image1.style.left = '0';
  image2.style.display = 'none';
  image2.style.left = '100%';
  image3.style.display = 'none';
  image3.style.left = '200%';
}

function handleDot2() {
  dot2.style.background = brown;
  dot1.style.background = grey;
  dot3.style.background = grey;

  image2.style.display = 'block';
  image2.style.left = '0';
  image1.style.display = 'none';
  image1.style.left = '-200%';
  image3.style.display = 'none';
  image3.style.left = '200%';
}

function handleDot3() {
  dot3.style.background = brown;
  dot2.style.background = grey;
  dot1.style.background = grey;

  image3.style.display = 'block';
  image3.style.left = '0';
  image2.style.display = 'none';
  image2.style.left = '-200%';
  image1.style.display = 'none';
  image1.style.left = '-200%';
}

function handleStart1(event) {
  startingX = event.touches[0].clientX;
  // console.log('handleStart1, startingX is ', startingX);
}

function handleMove1(event) {
  var touch = event.touches[0];
  var change = startingX - touch.clientX;
  // console.log('handleMove1, touch and change ', touch, change);

  if (change < 0) return;

  image1.style.left = '-' + change + 'px';
  image2.style.display = 'block';
  image2.style.left = (screen.width - change) + 'px';
  event.preventDefault();
}

function handleEnd1(event) {
  // console.log('handleEnd1');
  var change = startingX - event.changedTouches[0].clientX;
  var threshold = screen.width / 3;
  if (change < threshold) {
    image1.style.left = '50%';
    image2.style.left = '50%';
    image2.style.display = 'none';
  } else {
    image1.style.transition = 'all .3s';
    image2.style.transition = 'all .3s';
    image1.style.display = 'none';
    image2.style.left = '50%';
    image2.style.display = 'block';

    dot2.style.background = brown;
    dot1.style.background = grey;
    dot3.style.background = grey;
  }
}

function handleStart2(event) {
  // console.log('handleStart2');
  startingX = event.touches[0].clientX;
  image1.style.transition = '';
  image2.style.transition = '';
  image1.style.display = 'none';
}

function handleMove2(event) {
  // console.log('handleMove2');
  var touch = event.touches[0];
  var change = touch.clientX - startingX;

  // console.log(change);
  if (change < 0) {
    image3.style.display = 'block';
    image3.style.left = (change + screen.width) + 'px';
    image2.style.left = -change + 'px';
    event.preventDefault();
  }

  image1.style.display = 'block';
  image1.style.left = (change - screen.width) + 'px';
  image2.style.left = change + 'px';
  event.preventDefault();
}

function handleEnd2(event) {
  var change = event.changedTouches[0].clientX - startingX;
  var threshold = screen.width / 4;

  if (change > 0 && change < threshold) { // Keep image2
    image1.style.left = '50%';
    image1.style.display = 'none';
    image2.style.left = '50%';
  } else if (change > 0 && change > threshold) { // Show image1
    image1.style.transition = 'all .3s';
    image2.style.transition = 'all .3s';
    image1.style.left = '50%';
    image2.style.left = '50%';
    image2.style.display = 'none';

    dot1.style.background = brown;
    dot2.style.background = grey;
    dot3.style.background = grey;
  } else if (change < 0 && -change < threshold) { // Keep image2
    image3.style.left = '50%';
    image3.style.display = 'none';
    image2.style.left = '50%';
  } else if (change < 0 && -change > threshold) { // Show image3
    image2.style.transition = 'all .3s';
    image3.style.transition = 'all .3s';
    image3.style.left = '50%';
    image2.style.left = '50%';
    image2.style.display = 'none';

    dot3.style.background = brown;
    dot2.style.background = grey;
    dot1.style.background = grey;
  } else {
    console.log('Error in handleEnd2');
  }
}

function handleStart3(event) {
  // console.log('handleStart3');
  startingX = event.touches[0].clientX;
  image2.style.transition = '';
  image3.style.transition = '';
  image2.style.display = 'none';
}

function handleMove3(event) {
  // console.log('handleMove3');
  var touch = event.touches[0];
  var change = touch.clientX - startingX;

  if (change < 0) return; // Yes bc no more images to left
  // Code below means we are swiping for image2
  image2.style.display = 'block';
  image2.style.left = (change - screen.width) + 'px';
  image3.style.left = change + 'px';
  event.preventDefault();
}

function handleEnd3(event) {
  // console.log('handleEnd3');
  var change = event.changedTouches[0].clientX - startingX;
  var threshold = screen.width / 4;
  // console.log('change ', change + 'threshold ', threshold);

  if (change < threshold) { // keep image3
    image3.style.left = '50%';
    image2.style.left = '50%';
    image2.style.display = 'none';
  } else { // show image2
    image3.style.transition = 'all .3s';
    image2.style.transition = 'all .3s';
    image3.style.left = '50%';
    image2.style.display = 'block';
    image2.style.left = '50%';
    image3.style.display = 'none';

    dot2.style.background = brown;
    dot1.style.background = grey;
    dot3.style.background = grey;
  }
}

image1.ontouchstart = handleStart1;
image1.ontouchmove = handleMove1;
image1.ontouchend = handleEnd1;

image2.ontouchstart = handleStart2;
image2.ontouchmove = handleMove2;
image2.ontouchend = handleEnd2;

image3.ontouchstart = handleStart3;
image3.ontouchmove = handleMove3;
image3.ontouchend = handleEnd3;

dot1.addEventListener('click', handleDot1);
dot2.addEventListener('click', handleDot2);
dot3.addEventListener('click', handleDot3);
