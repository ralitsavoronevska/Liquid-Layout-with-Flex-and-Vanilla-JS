(function IIFE(){
  "use strict";
  // Dropdown
  let mMenu = document.querySelector('.menu__mobile__btn'),
    mMenuBar = document.querySelector('.menu__bar'),
    dropDown = document.querySelector('.is-dropdown'),
    mDropDown = document.querySelector('.menu__dropdown'),
    showMenu = false;

	function toggleMenu() {
		if (!showMenu) {
      mMenu.classList.add('close');
      mMenuBar.classList.add('open');
      showMenu = true;
    } else {
      mMenu.classList.remove('close');
      mMenuBar.classList.remove('open');
      showMenu = false;
    }
  }

  mMenu.addEventListener("click", toggleMenu);

  dropDown.addEventListener("click", function() {
    dropDown.classList.toggle('open');
    mDropDown.classList.toggle('show');
  });

  // Accordions
  let accTitle = document.getElementsByClassName("acc-heading"),
    accContent = document.getElementsByClassName("acc-content"),
    singleMode = true;

  for (let j=0; j<accContent.length; j++) {
    let realHeight = accContent[j].offsetHeight;
    accContent[j].setAttribute("data-height", realHeight + "px");
    accContent[j].style.height = 0;
  }

  for (let i=0; i<accTitle.length; i++) {
    accTitle[i].onclick = function() {
      let openedAcc = this.getAttribute('href').replace('#', '');
      if (this.classList.contains("active")) {
        accTitle[i].innerHTML = "Click to close";
        this.innerHTML = "Click to open";
        this.classList.remove("active");
        document.getElementById(openedAcc).style.height = 0;
        return false;
      } else { this.innerHTML = "Click to close"; }

      if (singleMode) {
        for (let k=0; k<accTitle.length; k++) {
          accTitle[k].classList.remove("active");
          accTitle[k].innerHTML = "Click to open";
          accTitle[i].innerHTML = "Click to close";
        }
        for (let j=0; j<accContent.length; j++) { accContent[j].style.height = 0; }
      }

      this.classList.add("active");
      document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
      return false;
    }
  }

})();