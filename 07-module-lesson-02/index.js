$(document).ready(function () {
  var $statusKey = $('.status-key');
  var $statusAjax = $('.status-ajax');
  var intervalId;

  // Fake ajax request. Just for demo
  function make_ajax_request(e) {
    var that = this;
    $statusAjax.html("That's enough waiting. Making now the ajax request");

    intervalId = setTimeout(function () {
      $statusKey.html('Type here. I will detect when you stop typing');
      $statusAjax.html('');
      $(that).val(''); // empty field
    }, 2000);
  }

  // Event handlers to show information when events are being emitted
  $('.autocomplete').on('keydown', function () {
    $statusKey.html('Waiting for more keystrokes... ');
    clearInterval(intervalId);
  });

  // Display when the ajax request will happen (after user stops typing)
  // Exagerated value of 1.2 seconds for demo purposes, but in a real example would be better from 50ms to 200ms
  $('.autocomplete').on('keydown', _.debounce(make_ajax_request, 1300));
});
