const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener("mouseover", () => {
        portfolioItem.childNodes[1].classList.add("image-darken");
    });

    portfolioItem.addEventListener("mouseout", () => {
        portfolioItem.childNodes[1].classList.remove("image-darken");
    });
});