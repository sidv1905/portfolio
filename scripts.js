navmenu = document.querySelector(".navmenu");
topnav = document.querySelector(".topnav");
topnavright = document.querySelector(".topnav-right");
function togglebar() {
  if (navmenu.classList.contains("active")) {
    navmenu.classList.remove("active");
    topnav.classList.remove("active");
    topnavright.classList.remove("active");
  } else {
    navmenu.classList.add("active");
    topnav.classList.add("active");
    topnavright.classList.add("active");
  }
}

webapp = document.querySelector(".weblink");
microproject = document.querySelector(".microlink");
blogs = document.querySelector(".bloglink");
all = document.querySelector(".all");

webappcontainer = document.querySelector(".webappcontainer");
microcontainer = document.querySelector(".microcontainer");
blogcontainer = document.querySelector(".blogcontainer");

all.addEventListener("click", function () {
  webappcontainer.style.display = "flex";
  microcontainer.style.display = "flex";
  blogcontainer.style.display = "flex";
});

webapp.addEventListener("click", function () {
  webappcontainer.style.display = "flex";
  microcontainer.style.display = "none";
  blogcontainer.style.display = "none";
});

microproject.addEventListener("click", function () {
  microcontainer.style.display = "flex";
  webappcontainer.style.display = "none";
  blogcontainer.style.display = "none";
});

blogs.addEventListener("click", function () {
  webappcontainer.style.display = "none";
  microcontainer.style.display = "none";
  blogcontainer.style.display = "flex";
});

// detect scroll top or down
if ($(".topnav").length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $(".topnav").removeClass("scrolled-down").addClass("scrolled-up");
      $(".frontpage").css(
        "background-image",
        "url(img/IMG-20180630-WA0027.jpg)"
      );
    } else {
      $(".topnav").removeClass("scrolled-up").addClass("scrolled-down");
      $(".frontpage").css(
        "background-image",
        "url(img/IMG-20180630-WA0026.jpg)"
      );
    }
    last_scroll_top = scroll_top;
  });
}
