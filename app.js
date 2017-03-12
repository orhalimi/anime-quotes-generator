function generateNewColor() {
    var min = 0;
    var max = 190;
    var red = Math.floor(Math.random() * (max - min) + min);
    var green = Math.floor(Math.random() * (max - min) + min);
    var blue = Math.floor(Math.random() * (max - min) + min);
    setColor("rgb(" + red + "," + green + "," + blue + ")");
}

function setColor(color) {
    $(".random-background-color").animate({
        backgroundColor: color
    });
    $(".random-text-color").css("color", color);

}

$(document).ready(function () {
    $(".new-quote").click(function () {
        generateNewColor();
    });
});