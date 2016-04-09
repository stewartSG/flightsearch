$(document).on('ready page:load', function () {
  $("#price-range").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 200,
    from: 0,
    to: 200,
    prefix: "£"
  });
});