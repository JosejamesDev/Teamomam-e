$(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function() {
    openEnvelope();
  });

  btn_open.click(function() {
    openEnvelope();
  });

  btn_reset.click(function() {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    $('#valentines-day-card').addClass("open");
  }

  function closeEnvelope() {
    envelope.removeClass("open").addClass("close");
    $('#valentines-day-card').removeClass("open");
  }
});