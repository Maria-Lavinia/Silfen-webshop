$(document).ready(function () {
  $(".color-choose input").on("click", function () {
    var bagColor = $(this).attr("data-image");

    $(".active").removeClass("active");
    $(".left-column img[data-image = " + bagColor + "]").addClass("active");
    $(this).addClass("active");
  });
});
