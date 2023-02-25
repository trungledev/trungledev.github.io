$(document).ready(function () {

    $("button#toggleMode").click(function () {
        var body = $("body");
        var theme = body.attr("data-bs-theme");
        if (theme == "dark") {
            $("body").attr("data-bs-theme", "light");
        }
        else {
            $("body").attr("data-bs-theme", "dark");
        }
        $(this).toggleClass("navbar-dark");
    });
});