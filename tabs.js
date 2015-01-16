/*
<div class="tabs">
  <a href="#tab1" class="tab">Tab 1</a>
  <a href="#tab2" class="tab">Tab 2</a>
  <a href="#tab3" class="tab">Tab 3</a>
</div>
<div class="tabs-content">
  <div id="tab1" class="active">Mám auto a to auto jezdí dokola.</div>
  <div id="tab2">Mám auto a to auto jezdí dokola.</div>
  <div id="tab3">Mám auto a to auto jezdí dokola.</div>
</div>
*/

$(function() {
  $('.tab').on('click', function( event ) {
    event.preventDefault();

    var target = $(this).attr('href');

    $('.tabs-content > .active').removeClass('active');
    $(target).addClass('active');

    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
});
