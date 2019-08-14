/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
  $('title').remove();
  $(".govuk-skip-link").remove();

  $('#email-form').keydown(function(e) {
    if (e.keyCode == 13)
    {
      e.stopPropagation();
      e.preventDefault();
    }
  });
})
