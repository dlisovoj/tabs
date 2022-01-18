"use strict";

var heading = document.getElementById("heading");
var tabs = document.getElementsByClassName("tab");
var buttons = document.getElementsByTagName("button");

function changeTab(target, name){
  for(var i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none";
    buttons[i].classList.remove("selected");
    document.getElementById(name).classList.remove("tabAnimation");

  }
  target.currentTarget.classList.add("selected");
  document.getElementById(name).classList.add("tabAnimation");
  document.getElementById(name).style.display = "block";

  setTimeout(function(){
    show(name);
  }, 1)
}

function show(name){
  for(var i = 0; i < tabs.length; i++){
    tabs[i].classList.remove("tabShow");
  }
  document.getElementById(name).classList.add("tabShow");
}
