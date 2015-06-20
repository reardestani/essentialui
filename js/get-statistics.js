(function(){
  "use strict";

  // Get product statistics
    var product = $(".post"),
        fn   = "get-statistics",
        id   = product.data("id");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: "http://api.essentialui.com/ajax.php",
      data: { fn : fn, id : id }
    })

    .done(function( msg ) {
      if (msg) {
        $('.counter-views').html(msg.views);
        $('.counter-downloads').html(msg.downloads);
        $('.counter-likes').html(msg.likes);
      } else {
        $('.counter-views').html("error");
        $('.counter-downloads').html("error");
        $('.counter-likes').html("error");
      }
    }); // done

})();