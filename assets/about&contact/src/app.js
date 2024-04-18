$(document).ready(function () {
    if ($(Document.window).width() > 1300) {
        $("#include").load("/src/about.html");
    } else {
        $("#include").load("src/comingSoon/comingSoon.html");
    }
});