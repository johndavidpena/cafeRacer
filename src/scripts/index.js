// console.log(pageOne);

const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');

const inactivityTime = function () {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer;
  document.ontouchstart = resetTimer;
  document.onclick = resetTimer;
  document.onscroll = resetTimer;
  document.onkeypress = resetTimer;

  function showSlideshow() {
    pageOne.style.transition = 'all .7s';
    pageTwo.style.transition = 'all .7s';
    pageOne.style.display = 'none';
    pageTwo.style.display = 'block';
  }

  function resetTimer() {
    pageTwo.style.display = 'none';
    pageOne.style.display = 'block';

    clearTimeout(time);
    time = setTimeout(showSlideshow, 10000)
  }
};

inactivityTime();
