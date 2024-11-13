let scrollTop = document.querySelector(".scrollTop");

window.onscroll = () => {
 
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTop.style.display = "block";
    scrollTop.classList.add("visible");
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
    scrollTop.classList.remove("visible");

      setTimeout(() => {
      if (!scrollTop.classList.contains("visible")) {
        scrollTop.style.display = "none";
      }
    }, 2000); 
  }
};

scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
