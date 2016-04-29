/***************************************************************************/
            /* NAVIGATION  */
/***************************************************************************/
  
   (function($){
    $(function(){
      $('.button-collapse').sideNav();
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
 
/**************************************************************************
             SKILL BAR 
**************************************************************************/
  
  $(document).ready(function(){
      $(".determinate").each(function(){
          var width = $(this).text();
          $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');                
      });
      
    /**************************************************************************
            Style demo
    **************************************************************************/
   
    $('.cv-style-switch').click(function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('#switch-style').animate({'right':'0'});
    }else{
      $(this).addClass('open');
      $('#switch-style').animate({'right':'-300'});
    }
  });
  });
  
/**************************************************************************
             BLOG POST 
**************************************************************************/
  
  jQuery(window).on('load', function(){ var $ = jQuery;
    $('.blog').masonry({
      itemSelector: '.blog-post',
      columnWidth: '.blog-post',
      percentPosition: true
    });
});

  $(document).ready( function() {
    var height = $('.caption').height();
      if($(window).width()){
          $('#featured').css('height', height);   
          $('#featured img').css('height', height);   
      }
  });

/*************************************************************************
            TOOLTIP
**************************************************************************/

$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });

/**************************************************************************
    WOW INIT
**************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();
    
/***************************************************************************
            MAP
***************************************************************************/
        
      // When the window has finished loading create our google map below
      google.maps.event.addDomListener(window, 'load', init);
  
      function init() {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 17,
              scrollwheel: false, 
              navigationControl: false,

              // The latitude and longitude to center the map (always required)
              center: new google.maps.LatLng(24.906308,91.870413), // New York

              // How you would like to style the map. 
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
          };

          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);

          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(24.906308,91.870413),
              map: map,
              title: '24 Golden Tower (2nd floor), Amborkhana, Sylhet.!'
          });
      }


/**************************************************************************
             CONTACT FORM
**************************************************************************/

$("#contact").submit(function(e) {
    e.preventDefault();
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    };

    if ( isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: data,
            success: function() {
                $('.email-success').delay(500).fadeIn(1000);
                $('.email-failed').fadeOut(500);
            }
        });
    } else {
        $('.email-failed').delay(500).fadeIn(1000);
        $('.email-success').fadeOut(500);
    }

    return false;
});



  
