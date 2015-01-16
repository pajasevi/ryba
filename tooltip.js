/*
<span class="tooltip" data-tooltip="Nejlepší tooltip na svétě">Lorem ipsum</span>
*/

$(function() {
  $('.tooltip').on('mouseover', function() {
    var tooltipContent = $(this).attr('data-tooltip');
    var elemTop = $(this).offset.top - 20;
    var elemCenter = $(this).offset.left + ( $(this).innerWidth() / 2 );

    $('body').append('<div id="tooltipContent">' + tooltipContent + '</div>');

    var tooltipLeft = elemCenter - $('tooltipContent').outerWidth();

    $('#tooltipContent').css({
      position: "absolute",
      top: elemTop,
      left: tooltipLeft
    });
  });

  $('.tooltip').on('mouseout', function() {

  });
});
