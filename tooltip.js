/*
<span class="tooltip" data-tooltip="Nejlepší tooltip na svétě">Lorem ipsum</span>
*/

$(function() {
  $('.tooltip').on('mouseover', function() {
    var tooltipContent = $(this).attr('data-tooltip');
    var elemTop = $(this).offset.top;
    var elemCenter = $(this).offset.left + ( $(this).innerWidth() / 2 );

    $('body').append('<div id="tooltipContent">' + tooltipContent + '</div>');
  });

  $('.tooltip').on('mouseout', function() {

  });
});
