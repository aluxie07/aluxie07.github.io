

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
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page1.style.display="block";
});
page2btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page2.style.display="block";
});
page3btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page3.style.display="block";
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


bgContainer = document.querySelector('.background-container');
maxScroll = 300; // controls when shrink/fade finishes
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




