$(document).ready(function() {
    let size = 200;
    let colors = ["red", "green", "blue"];
    let colorIndex = 0;

    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[colorIndex],
        "border-radius": "50%"
    });

    $("#balloon").click(function() {
        size += 10;

        if (size > 420) {
            size = 200;
        }

        colorIndex = (colorIndex + 1) % 3;

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    });

    $("#balloon").mouseleave(function() {
        size -= 5;

        if (size < 200) {
            size = 200;
        }

        colorIndex = (colorIndex + 2) % 3;

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    });
});