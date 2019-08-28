/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  if ($('#wrapper').hasClass('test')) {
    $('title').remove();
    $(".govuk-skip-link").remove();

    $('#email-form').keydown(function(e) {
      if (e.keyCode == 13 && $('#wrapper').hasClass('test'))
      {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }

  $('#form-error').hide();
  $('.govuk-error-summary').hide();



  $('#email-form').on('submit', function(e) {
    let errors = false;
    if ($('#wrapper').hasClass('test')) {
      if ($('#first-name').val() == '')
      errors = true;
      if ($('#last-name').val() == '')
      errors = true;
      if ($('#email').val() == '')
      errors = true;
    } else {
      if ($('#email').val() == '') {
        errors = true;
        $('#focus-link').attr('href', '#email');
      }
      if ($('#full-name').val() == '') {
        errors = true;
        $('#focus-link').attr('href', '#full-name');
      }
    }


    if (errors) {
      e.stopPropagation();
      e.preventDefault();
      // add class to form
      $('#email-form').addClass('govuk-form-group--error');

      // error message
      $('#form-error').removeClass("govuk-visually-hidden");
      $('#form-error').show();

      $('.govuk-error-summary').removeClass('govuk-visually-hidden');
    }
    return true;

  });

  $('div#go-confirm').on('click', function(e) {
    $('#frequency').val("weekly");
    $('#email-form').submit();
  });

  $(".modal").on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('body').prepend('<div id="overlay"></div>');
    $(".modal_dialog").show();
    $("#main-heading")[0].scrollIntoView();
  });

  $('.modal__close').on('click', function(e) {
    $('#overlay').remove();
    $(".modal_dialog").hide();
  });

})
