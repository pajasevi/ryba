/*
<div class="accordion">
  <div class="accordion-header">Nadpis akordeonu</div>
  <div class="accordion-body">Tělo akordeonu, třeba lorem ipsum</div>
</div>
*/

$(function() {
  $('.accordion-header').on('click', function() {
    var $acc = $(this).parent();
    var $accBody = $(this).parent().find('.accordion-body');

    if($acc.hasClass('open')) {
      $accBody.slideUp(function() {
        $acc.removeClass('open');
      });
    }
    else {
      $accBody.slideDown(function() {
        $acc.addClass('open');
      });
    }
  });
});
