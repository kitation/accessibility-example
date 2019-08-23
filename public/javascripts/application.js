/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $('title').remove();
  $(".govuk-skip-link").remove();
  $('#form-error').hide();

  $('#email-form').keydown(function(e) {
    if (e.keyCode == 13)
    {
      e.stopPropagation();
      e.preventDefault();
    }
  });

  $('#email-form').on('submit', function(e) {
    let errors = false;
    if ($('#first-name').val() == '')
      errors = true;
    if ($('#last-name').val() == '')
      errors = true
    if ($('#email').val() == '')
        errors = true;
    if (errors) {
      e.stopPropagation();
      e.preventDefault();
      // add class to form
      $('#email-form').addClass('govuk-form-group--error');

      // error message
      $('#form-error').removeClass("govuk-visually-hidden");
      $('#form-error').show();
    }
    return true;

  });

  $('div #go-confirm').on('click', function(e) {
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
