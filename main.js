

//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
function hideall(){ //function to hide all pages
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";

    page1.classList.remove("active");
    page2.classList.remove("active");
    page3.classList.remove("active");
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  page1.style.display = "flex";
    setTimeout(() => {
    page1.classList.add("active");
  }, 10); // 10ms is enough


});
page2btn.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  page2.style.display = "flex";
  setTimeout(() => {
    page2.classList.add("active");
  }, 10); // 10ms is enough


});
page3btn.addEventListener("click", function () {
  hideall(); //we don't know which page is shown, so hideall
  page3.style.display = "flex";
  setTimeout(() => {
    page3.classList.add("active");
  }, 10); // 10ms is enough


});
hideall(); //call hideall function to hide all pages

window.addEventListener("load", function () {
  const bg = document.querySelector(".background-container");
  bg.classList.add("load-fade");
  bg.style.opacity = "1";
  // Remove the class after transition completes
  setTimeout(() => {
    bg.classList.remove("load-fade");
  }, 1000); // match the duration of your CSS transition
});


const bgContainer = document.querySelector('.background-container');
maxScroll = 100; // controls when shrink/fade finishes
minHeight = 20;  // in vh
maxHeight = 100;

window.addEventListener('scroll', () => {
  scrollRatio = Math.min(window.scrollY / maxScroll, 1);

  // 🔽 Shrink the height
  newHeight = maxHeight - (maxHeight - minHeight) * scrollRatio;
  bgContainer.style.height = `${newHeight}vh`;

  opacity = Math.max(1 - window.scrollY / 200, 0.5);
  bgContainer.style.opacity = opacity;
});

function playDemo(elementId) {
    var sound = document.getElementById(elementId);
     if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
  }

}
// function fadeInElement(button, page) {
//   document.getElementById(button).addEventListener("click", function () {
//     const section = document.querySelector(page);
//     section.classList.add("visible");
//   });
// }

// fadeInElement("page1btn", "#page1");



