const scrollUp = () => {
  const scrollUp = document.querySelector(".hero__scroll-up");
  const scrollUpBtn = document.querySelector(".hero__scroll-up-chevron");

  scrollUpBtn.addEventListener("click", () =>
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  );

  const onPageScroll = () => {
    const displayStyle = window.pageYOffset > 800 ? "flex" : "none";
    scrollUp.style.display = displayStyle;
  };

  window.addEventListener("scroll", onPageScroll);
};

export default scrollUp;
