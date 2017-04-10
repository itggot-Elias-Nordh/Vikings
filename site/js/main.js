function season(number) {
   document.querySelector(".season1").classList.add("remove");
   document.querySelector(".season2").classList.add("remove");
   document.querySelector(".season3").classList.add("remove");
   document.querySelector(".season4").classList.add("remove");
   document.querySelector(number).classList.remove("remove");
}

function chat(name) {
   document.querySelector(".spoilers").classList.add("remove");
   document.querySelector(".rangnars").classList.add("remove");
   document.querySelector(".season4").classList.add("remove");
   document.querySelector(".harbard").classList.add("remove");
   document.querySelector(".season5").classList.add("remove");
   document.querySelector(".club").classList.add("remove");
   document.querySelector(".random1").classList.add("remove");
   document.querySelector(".random2").classList.add("remove");
   document.querySelector(".random3").classList.add("remove");
   document.querySelector(".random4").classList.add("remove");
   document.querySelector(".random5").classList.add("remove");
   document.querySelector(".random6").classList.add("remove");
   document.querySelector(".random7").classList.add("remove");
   document.querySelector(".random8").classList.add("remove");
   document.querySelector(".random9").classList.add("remove");
   document.querySelector(".chat").classList.remove("chat-background");
   document.querySelector(name).classList.remove("remove");
   if (name == ".spoilers") {
     document.querySelector(".chat").classList.add("chat-background");
   }
}
