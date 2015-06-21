(function(){
  "use strict";
  
  // Get total downloads
  // -------------------------------------------------
    var request = $.ajax({
      type: "POST",
      cache: false,
      dataType: "json",
      url: "http://api.essentialui.com/ajax.php",
      data: { fn : "get-total-downloads" }
    });

    request.done(function( msg ) {
      if (msg) {
        $('.total-downloads').text(msg);
      }
    }); // done

  // Update clicks
  // -------------------------------------------------
    $(document).on('click', '.btn-join', function(){

      // Variables
      var btnJoin = $(this),
          fn           = btnJoin.data("fn"),
          id           = btnJoin.data("id");

      // Send ajax request
      $.ajax({
        type: "POST",
        cache: false,
        url: "http://api.essentialui.com/ajax.php",
        data: { fn : fn, id : id }
      });

    });


  // Subsciption
  // -------------------------------------------------
    $( ".form-newsletter" ).submit(function( event ) {
   
      // Stop form from submitting normally
      event.preventDefault();
     
      // Get some values from elements on the page:
      var $form = $( this ),
        term = $form.find( "input[type='email']" ).val(),
        url = "http://api.essentialui.com/ajax.php";

      $.ajax({
        type: "POST",
        cache: false,
        url: url,
        data: { fn: "subscription", email: term },
        dataType: "json",
     
        success: function( responce ) {
          if (responce.status === 'success') {
            $('.form-group').addClass('has-success').removeClass('has-error');
            $form.find( "input[type='email']" ).val(" ");
            $('.subscription-response').text('Thanks for subscribing to our website. You will be notified of new products and news.');
          } else {
            $('.form-group').addClass('has-error').removeClass('has-success');
            $('.subscription-response').text('Due to our validation, your email address in not valid. Provide another one or check yours again, please.');
          }
        }, // success

        error: function( jqXHR, textStatus ) {
          
        } // error

      }); // ajax

    });
  
})();