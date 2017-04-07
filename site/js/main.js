$("a").click(function () {
    $("a").removeClass("blue");
    $(this).addClass("blue");
});

function season(number) {
   document.querySelector(".season1").classList.add("bar");
   document.querySelector(".season2").classList.add("bar");
   document.querySelector(".season3").classList.add("bar");
   document.querySelector(".season4").classList.add("bar");
   document.querySelector(number).classList.remove("bar");
}
