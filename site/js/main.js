$("a").click(function () {
    $("a").removeClass("blue");
    $(this).addClass("blue");
});

function season(number) {
   document.querySelector(".season1").classList.add("remove");
   document.querySelector(".season2").classList.add("remove");
   document.querySelector(".season3").classList.add("remove");
   document.querySelector(".season4").classList.add("remove");
   document.querySelector(number).classList.remove("remove");
}
