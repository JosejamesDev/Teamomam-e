$(document).ready(function() {
  var card = $('#valentines-day-card');
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
    card.removeClass("fechar").addClass("open");
  }

  function closeEnvelope() {
    envelope.removeClass("open").addClass("close");
    card.removeClass("open").addClass("fechar");
  }
});