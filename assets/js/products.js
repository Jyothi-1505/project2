/* =========================================
   PRODUCTS PAGE FILTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".product-filter");

    const productCards =
        document.querySelectorAll(".product-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.getAttribute("data-filter");


            /* =========================================
               ACTIVE BUTTON
            ========================================= */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /* =========================================
               FILTER PRODUCTS
            ========================================= */

            productCards.forEach(function (card) {

                const category =
                    card.getAttribute("data-category");


                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {

                    card.style.display = "flex";

                    requestAnimationFrame(function () {

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0)";

                    });

                } else {

                    card.style.opacity = "0";

                    card.style.transform =
                        "translateY(8px)";

                    setTimeout(function () {

                        card.style.display = "none";

                    }, 200);

                }

            });

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".product-filter");

    const categorySections =
        document.querySelectorAll("[data-category-section]");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory =
                button.getAttribute("data-category");


            /* =========================================
               CHANGE ACTIVE BUTTON
            ========================================= */

            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });

            button.classList.add("active");


            /* =========================================
               SHOW / HIDE CATEGORY SECTIONS
            ========================================= */

            categorySections.forEach(function (section) {

                const sectionCategory =
                    section.getAttribute(
                        "data-category-section"
                    );


                if (
                    selectedCategory === "all" ||
                    selectedCategory === sectionCategory
                ) {

                    section.style.display = "block";

                } else {

                    section.style.display = "none";

                }

            });

        });

    });

});
