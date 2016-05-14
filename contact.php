<!DOCTYPE html>
<!--[if IE 7]><html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]><html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
    
<!-- Mirrored from demo.deviserweb.com/cv/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 14 Aug 2015 08:23:18 GMT -->
<head>
        <meta charset="utf-8">
        
        <!-- TITLE OF SITE-->
        <title> Al Rayhan </title>
        
        <!-- META TAG -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="CV, Portfolio, Resume">
        <meta name="author" content="Desiver Web, Md. Siful Islam">
        
        <!-- FAVICON -->
        <link rel="icon" href="assets/images/favicon.ico">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/apple-icon-76x76.html">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-icon-114x114.png">

        <!-- ========================================
                Stylesheets
        ==========================================--> 
        
        <!-- MATERIALIZE CORE CSS -->
        <link href="assets/css/materialize.min.css" rel="stylesheet">
        

        <!-- ADDITIONAL CSS -->
        <link rel="stylesheet" href="assets/css/animate.css">
        

        <!-- FONTS -->
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,700,400italic,700italic' rel='stylesheet' type='text/css'>
        

        <!--FONTAWESOME CSS-->
        <link href="assets/icons/font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"> 
        

        <!-- CUSTOM STYLE -->
        <link href="assets/css/style.css" rel="stylesheet">
        

        <!-- RESPONSIVE CSS-->
        <link href="assets/css/responsive.css" rel="stylesheet">
        
        
        <!-- COLORS -->        
        <link rel="alternate stylesheet" href="assets/css/colors/red.css" title="red">
        <link rel="alternate stylesheet" href="assets/css/colors/purple.css" title="purple">
        <link rel="alternate stylesheet" href="assets/css/colors/orange.css" title="orange">
        <link rel="alternate stylesheet" href="assets/css/colors/green.css" title="green">
        <link rel="stylesheet" href="assets/css/colors/lime.css" title="lime"> 
        
        
        <!-- STYLE SWITCH STYLESHEET ONLY FOR DEMO -->
        <link rel="stylesheet" href="assets/css/demo.css">
        
        <!--[if lt IE 9]><script src="assets/js/ie8-responsive-file-warning.js"></script><![endif] -->
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
        
    </head>
    <body>
        <!-- Start Container-->
        <div class="container">
            <!-- row -->
            <div class="row">
            <!-- =========================================
                           SIDEBAR   
            ==========================================-->
                <!-- Start Sidebar -->
                <aside class="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
                    <!--  Sidebar row -->
                    <?php
                    include_once ("left.php");
                    ?>
                </aside><!-- end sidebar -->
                
                <!-- =========================================
                         Google Map
                ===========================================-->

                 <section class="col s12 m12 l8 section">
                    <div class="row">
                        <!-- Start map -->
                        <div class="section-wrapper g-map z-depth-1">
                            <div id="map"> </div>
                        </div> 
                        
                        <!--=======================================
                         Contact
                        ==========================================-->

                        <div class="section-wrapper z-depth-1">                            
                            <div class="section-icon col s12 m12 l2">
                                <i class="fa fa-paper-plane-o"></i>
                            </div>
                            <div class="col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s" >
                                <h2>Contact</h2>
                                
                                <form id="contact" class="col s12 contact-form">
                                    <div class="row">
                                        <div class="message col s12 m12 l12">
                                            <p class="email-success"><i class="fa fa-check"></i> Your quote has successfully been sent.</p>
                                            <p class="email-failed"><i class="fa fa-close"></i> Something went wrong!</p>
                                        </div>
                                        <div class="input-field col s12 wow fadeIn a2" data-wow-delay="0.1s">
                                            <input id="name" name="name" type="text" class="validate">
                                            <label for="name">Name</label>
                                        </div>
                                        <div class="input-field col s12 wow fadeIn a4" data-wow-delay="0.3s">
                                            <input id="email" type="email" name="email" class="validate">
                                            <label for="email">Email</label>
                                        </div>
                                        <div class="input-field col s12 wow fadeIn a5" data-wow-delay="0.4s">
                                            <textarea id="message" class="materialize-textarea"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                        <button class="btn waves-effect waves-light wow fadeIn" type="submit" name="action" data-wow-delay="0.5s">Submit</button>
                                    </div>  
                                </form>
                            </div>                            
                         </div>

                        <!-- =========================================
                          portfolio Website
                        ==========================================-->

                        <?php include_once ("footer.php"); ?>

                    </div> 
                <!-- end row -->
                </section>
            </div> <!-- end row -->
        </div> <!-- end container -->
    
        <!--=====================
                JavaScript
        ===================== -->
        <!-- Jquery core js-->
        <script src="assets/js/jquery.min.js"></script>
        
        <!-- materialize js-->
        <script src="assets/js/materialize.min.js"></script>
        
        <!-- wow js-->
        <script src="assets/js/wow.min.js"></script>
        
        <!-- Map api -->
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        
        <!-- Masonry js-->
        <script src="assets/js/masonry.pkgd.js"></script>
        
        <!-- Customized js -->
        <script src="assets/js/init.js"></script>

        
        <?php /*include_once ("swicher.php")*/?>

    </body>

</html>
