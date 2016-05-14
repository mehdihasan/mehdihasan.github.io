<!DOCTYPE html>
<!--[if IE 7]><html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]><html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
    
<!-- Mirrored from demo.deviserweb.com/cv/project.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 14 Aug 2015 08:23:10 GMT -->
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
                STYLESHEETS
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

            <!-- =======================================
                          blog 
            =========================================-->
                <section class="col s12 m12 l8 section" > <!-- Blog section start --> 
                    <div class="row">
                        <div class="blog">


                            <?php
                            
                            include_once ("vars.php");

                            for ($i=0; $i < sizeof($portfolio); $i++) {
                                include ("project-item.php");
                            }
                            
                            ?>

                            <!--<div class="col s12 m12 l6 blog-post">
                                <div class="thumbnail z-depth-1 animated">
                                    <a href="project-details.html"><img src="assets/images/blog1.jpg" alt="" class="responsive-img"></a>                                       
                                    <div class="blog-details">
                                        <div class="post-title" id="blog-post-1">
                                            <a href="project-details.html">
                                                <h2>Website Design</h2>
                                                <span>branding, ui-ux, article</span>
                                            </a>
                                        </div> 
                                        <div class="post-details">                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit
                                            ltricies fermentum. Aliquam congue augue a ullamcorper finibus.</p>                           
                                        </div> 
                                    </div>              
                                </div>
                            </div>

                            <div class="col s12 m12 l6 blog-post">
                                <div class="thumbnail z-depth-1">
                                    <a href="project-details.html"><img src="assets/images/blog2.jpg" alt="" class="responsive-img"></a>                                        
                                    <div class="blog-details">
                                        <div class="post-title" id="blog-post-2">
                                            <a href="project-details.html">
                                                <h2>Website Redesign</h2>
                                                <span>branding, ui-ux, article</span>
                                            </a>
                                        </div> 
                                        <div class="post-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus.</p>
                                        </div> 
                                    </div>              
                                </div>
                            </div>

                            <div class="col s12 m12 l6 blog-post">
                                <div class="thumbnail z-depth-1">
                                    <a href="project-details.html"><img src="assets/images/blog4.jpg" alt="" class="responsive-img"></a>                                       
                                    <div class="blog-details">
                                        <div class="post-title" id="blog-post-3">
                                            <a href="project-details.html">
                                                <h2>Music Player Design</h2>
                                                <span>branding, ui-ux, article</span>
                                            </a>
                                        </div> 
                                        <div class="post-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus.</p> 

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus.</p>  
                                        </div> 
                                    </div>              
                                </div>
                            </div>

                            <div class="col s12 m12 l6 blog-post">
                                <div class="thumbnail z-depth-1">
                                    <a href="project-details.html"><img src="assets/images/blog5.jpg" alt="" class="responsive-img"></a>                                       
                                    <div class="blog-details">
                                        <div class="post-title" id="blog-post-4">
                                            <a href="project-details.html">
                                                <h2>Marketing Partner</h2>
                                                <span>branding, ui-ux, article</span>
                                            </a>
                                        </div> 
                                        <div class="post-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus.</p>                            
                                        </div> 
                                    </div>              
                                </div>
                            </div>

                            <div class="col s12 m12 l12 blog-post">
                                <div class="row">
                                    <div class="thumbnail z-depth-1">                                    
                                        <div class="featured-img col m12 s12 l6 " id="featured">
                                            <a href="project-details.html"><img src="assets/images/bb3.jpg" alt="" class="responsive-img z-depth-1"></a>  
                                        </div> 
                                        <div class="caption col m12 s12 l6" id="caption">
                                            <div class="post-details z-depth-1">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum. Aliquam congue augue a ullamcorper finibus. 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum.</p>                            
                                            </div>
                                            <div class="post-title z-depth-1" id="blog-post-5">
                                                <a href="project-details.html">
                                                    <h2>Website Development</h2>
                                                    <span>branding, ui-ux, article</span>
                                                </a>
                                            </div> 
                                        </div>
                                    </div>  
                                </div>
                            </div>-->




                        </div>
                       <!-- =========================================
                          portfolio Website
                        ==========================================-->

                        <?php include_once ("footer.php"); ?>
                        
                    </div> 
                <!-- end row -->
                </section>
            </div>
        <!-- end row -->
        </div> 
        <!-- end container -->

        <!--=======================
                JavaScript
        ===================== -->
        <!-- Jquery core js-->
        <script src="assets/js/jquery.min.js"></script>
        
        <!-- materialize js-->
        <script src="assets/js/materialize.min.js"></script>
        
        <!-- wow js-->
        <script src="assets/js/wow.min.js"></script>
        
        <!-- Masonry js-->
        <script src="assets/js/masonry.pkgd.js"></script>
        
        <!-- Customized js -->
        <script src="assets/js/init.js"></script>


        <?php /*include_once ("swicher.php")*/?>

    </body>

</html>

        
        

