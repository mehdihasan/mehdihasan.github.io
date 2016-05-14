<?php
/**
 * Created by PhpStorm.
 * User: mehdi
 * Date: 5/14/16
 * Time: 5:17 PM
 */
?>

<div class="col s12 m12 l6 blog-post">
    <div class="thumbnail z-depth-1 animated">
        <a href="<?php echo $portfolio[$i]['link']?>"><img src="<?php echo $portfolio[$i]['image']?>" alt="" class="responsive-img"></a>
        <div class="blog-details">
            <div class="post-title" id="blog-post-2">
                <a href="<?php echo $portfolio[$i]['link']?>">
                    <h2><?php echo $portfolio[$i]['title']?></h2>
                    <span><?php echo $portfolio[$i]['expertise']?></span>
                </a>
            </div>
            <div class="post-details">
                <p><?php echo $portfolio[$i]['description']?></p>
            </div>
        </div>
    </div>
</div>