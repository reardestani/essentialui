(function(){
  "use strict";

  // Update views
  // -------------------------------------------------
    var productViews	= $('.post'),
        fn        = productViews.data("fn"),
        id        = productViews.data("id");

    $.ajax({
      type: "POST",
      cache: false,
      url: "http://api.essentialui.com/ajax.php",
      data: { fn : fn, id : id }
    });

  // Update demo
  // -------------------------------------------------
    $(document).on('click', '.btn-demo', function(){

      // Variables
      var productDemo  = $(this),
          href         = productDemo.data("href"),
          fn           = productDemo.data("fn"),
          id           = productDemo.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.essentialui.com/ajax.php",
        data: { fn : fn, id : id }
      });

      // Download
      setTimeout( function() {
        window.location.href = href;
      }, 500);

    });

  // Update downloads
  // -------------------------------------------------
    $(document).on('click', '.btn-download', function(){

      // Variables
      var productDownloads = $(this),
          href             = productDownloads.data("href"),
          fn               = productDownloads.data("fn"),
          id               = productDownloads.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.essentialui.com/ajax.php",
        data: { fn : fn, id : id }
      }).done(function() {

        var currentDownloads = $(".counter-downloads").text();
        var currentDownloads = parseInt(currentDownloads) + 1;
        $(".counter-downloads").text(currentDownloads);

      }); //.done

      // Download
      productDownloads.text('Downloading...')
      setTimeout( function() {
        window.location.href = href;
        productDownloads.text('Download');
      }, 500);

    });

  // Update likes
  // -------------------------------------------------
    $(document).on('click', '.btn-like', function(){

      // Variables
      var productLikes = $(this),
          fn           = productLikes.data("fn"),
          id           = productLikes.data("id");

      productLikes.text('Liking...');

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.essentialui.com/ajax.php",
        data: { fn : fn, id : id }
      }).done(function() {

        var currentLikes = $(".counter-likes").text();
        var currentLikes = parseInt(currentLikes) + 1;
        $(".counter-likes").text(currentLikes);

        productLikes.text('Thanks').removeClass("btn-like");

      }); //.done

    }); // update likes

  // Update download all
  // -------------------------------------------------
    $(document).on('click', '.btn-download-all', function(){

      // Variables
      var btnDownloadAll = $(this),
          fn           = btnDownloadAll.data("fn"),
          id           = btnDownloadAll.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        url: "http://api.essentialui.com/ajax.php",
        data: { fn : fn, id : id }
      });

    });

})();