/* =========================================
   BOOK NOW PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       LUCIDE
    ========================================= */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =========================================
       RTL TOGGLE
    ========================================= */

    const rtlToggle = document.getElementById("rtlToggle");

    if (rtlToggle) {

        rtlToggle.addEventListener("click", function () {

            const currentDirection =
                document.documentElement.getAttribute("dir");

            const newDirection =
                currentDirection === "rtl" ? "ltr" : "rtl";

            document.documentElement.setAttribute(
                "dir",
                newDirection
            );

            localStorage.setItem(
                "bakersDirection",
                newDirection
            );

        });

    }


    /* Restore RTL */

    const savedDirection =
        localStorage.getItem("bakersDirection");

    if (savedDirection) {

        document.documentElement.setAttribute(
            "dir",
            savedDirection
        );

    }


    /* =========================================
       DARK MODE
    ========================================= */

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    if (darkModeToggle) {

        darkModeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "bakersDarkMode",
                isDark ? "dark" : "light"
            );

        });

    }


    /* Restore Dark Mode */

    const savedTheme =
        localStorage.getItem("bakersDarkMode");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    /* =========================================
       MINIMUM DATE
    ========================================= */

    const dateInput =
        document.getElementById("required-date");

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.setAttribute("min", today);

    }


    /* =========================================
       FORM SUBMIT
    ========================================= */

    const enquiryForm =
        document.getElementById("bookEnquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you! Your enquiry has been submitted."
            );

        });

    }

});