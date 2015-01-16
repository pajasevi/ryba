Ryba = Ryba || {};

Ryba.modal = function() {
  Ryba.modal.construct();
  Ryba.modal.attachListeners();
}

Ryba.accordion = function() {
  Ryba.accordion.attachListeners();
}

/**
 * Modal constructor
 */
Ryba.modal.construct = function() {
  $('body').append('<div id="modal"></div>');
  $('#modal').append('<a href="javascript:void(0)" id="closeModal">close modal</a>');
  $('#modal').append('<div id="modalContent"></div>');
  $('body').append('<div id="overlay"></div>');
}

/**
 * Modal 'open' function
 */
Ryba.modal.open = function( element ) {
  var target = $(element).attr('href');
  if (target != undefined) {
    $('#modalContent').load(target, function( response, status, xhr ) {
      if (status === 'success') {
        $('#modal, #overlay').fadeIn();
      }
      else {
        console.log( 'error' + xhr.status + ' ' + xhr.statusText )
      }
    });
  }
}

/**
 * Modal 'close' function
 */
Ryba.modal.close = function() {
  $('#modal, #overlay').fadeOut(400, function() {
    $('#modalContent').empty();
  });
}

/**
 * Accordion 'open' function
 */
Ryba.accordion.control = function( $accordion, $accordionBody ) {
  if($accordion.hasClass('open')) {
    Ryba.accordion.close($accordion, $accordionBody);
  }
  else {
    Ryba.accordion.open($accordion, $accordionBody);
  }
}

/**
 * Accordion 'open' function
 */
Ryba.accordion.open = function( $accordion, $accordionBody ) {
  $accordionBody.slideDown(function() {
    $accordion.addClass('open');
  });
}

/**
 * Accordion 'close' function
 */
Ryba.accordion.close = function( $accordion, $accordionBody ) {
  $accordionBody.slideUp(function() {
    $accordion.removeClass('open');
  });
}

/**
 * Event listeners
 */

Ryba.modal.attachListeners = function() {
  $('.modal').on('click', function( event ) {
    event.preventDefault();
    Ryba.modal.open(this);
  });

  $('#closeModal, #overlay').on('click', function() {
    Ryba.modal.close();
  });
}

Ryba.accordion.attachListeners = function() {
  $('.accordion-header').on('click', function() {
    var $acc = $(this).parent();
    var $accBody = $(this).parent().find('.accordion-body');

    Ryba.accordion.control( $acc, $accBody );
  });
}
