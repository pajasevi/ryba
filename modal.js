/*
<a class="modal" href="http://google.com">Google</a>


<div id="overlay"></div>
<div id="modal">
  <a href="javascript:void(0)" id="closeModal">close modal</a>
  <div id="modalContent"></div>
</div>
*/

$(function() {
  $('.modal').on('click', function( event ) {
    event.preventDefault();

    var target = $(this).attr('href');

    if (target != undefined && target != '#') {
      $('#modalContent').load(target, function( response, status, xhr ) {
        if (status === 'success') {
          $('#modal, #overlay').fadeIn();
        }
        else {
          alert( 'error: ' + xhr.status + ' ' + xhr.statusText )
        }
      });
    }
  });

  $('#closeModal, #overlay').on('click', function() {
    $('#modal, #overlay').fadeOut(400, function() {
      $('#modalContent').empty();
    });
  });
});
