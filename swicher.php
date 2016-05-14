<?php
/**
 * Created by PhpStorm.
 * User: mehdi
 * Date: 5/14/16
 * Time: 5:58 PM
 */
?>

<!-- =========================================================
            STYLE SWITCHER | ONLY FOR DEMO NOT INCLUDED IN MAIN FILES
        ===========================================================-->

<!-- Style switter js -->
<script src="assets/js/styleswitcher.js"></script>

<div class="cv-style-switch" id="switch-style">
    <a id="toggle-switcher" class="switch-button icon_tools"> <i class="fa fa-cogs"></i></a>
    <div class="switched-options">
        <div class="config-title">
            Colors :
        </div>
        <ul class="styles">
            <li><a href="index-2.php#" onclick="setActiveStyleSheet('red'); return false;" title="red">
                    <div class="red"></div>
                </a></li>

            <li><a href="index-2.php#" onclick="setActiveStyleSheet('purple'); return false;" title="purple">
                    <div class="purple"></div>
                </a></li>

            <li><a href="index-2.php#" onclick="setActiveStyleSheet('orange'); return false;" title="orange">
                    <div class="orange"></div>
                </a></li>

            <li><a href="index-2.php#" onclick="setActiveStyleSheet('green'); return false;" title="green">
                    <div class="green"></div>
                </a></li>

            <li><a href="index-2.php#" onclick="setActiveStyleSheet('lime'); return false;" title="lime">
                    <div class="lime"></div>
                </a></li>


            <li class="p">
                ( NOTE: Pre Defined Colors. You can change colors very easily )
            </li>
        </ul>
    </div>
</div>
