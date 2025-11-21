$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Zarfın kendisine veya 'Aç' butonuna tıklanırsa
  envelope.click(function () {
    openEnvelope();
  });
  btn_open.click(function () {
    openEnvelope();
  });

  // 'Kapat' butonuna tıklanırsa
  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    // Kapatınca scrollu başa saralım, bir dahaki açışta düzgün görünsün
    $(".letter-content").scrollTop(0);
  }
});
