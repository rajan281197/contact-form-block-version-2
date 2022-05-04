<?php
/**
 * Plugin Name: CF block
 * Description: Gutenberg CF block with contact form field,
 * Requires Plugins: WP Mail SMTP
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author: <a href="https://profiles.wordpress.org/rajanpanchal2028/">Rajan Panchal</a>
 * Version: 1.0.0
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text-Domain: contact-form-block
 */

register_activation_hook(__FILE__, 'child_plugin_activate');
function child_plugin_activate()
{

    // Require parent plugin
    if (!is_plugin_active('wp-mail-smtp/wp_mail_smtp.php') and current_user_can('activate_plugins')) {
        // Stop activation redirect and show error
        wp_die('Sorry, but this plugin requires the WP MAIL SMTP Plugin to be installed and active. <br><a href="' . admin_url('plugins.php') . '">&laquo; Return to Plugins</a>');
    }
}

if (!defined('ABSPATH')): exit();
endif; // No direct access allowed

/**
 * Register Gutenber Scripts
 */
add_action(
    'enqueue_block_editor_assets', function () {
        wp_enqueue_script(
            'gutenberg-block-editor-script-contact-form-block',
            plugins_url('build/index.js', __FILE__),
            [
                'wp-plugins',
                'wp-blocks',
                'wp-editor',
                'wp-edit-post',
                'wp-i18n',
                'wp-element',
                'wp-components',
                'wp-data',
            ]
        );
    }
);

/**
 * Enqueue Styles
 */
add_action(
    'wp_enqueue_scripts', function () {
        wp_enqueue_style('gutenberg-block-style-contact-form-block', plugins_url('assets/css/style.css', __FILE__), [], false, 'all');
        // wp_register_script('recaptchaapi', plugins_url('assets/js/api.js', __FILE__), array('jquery'), '', 'true');
        // wp_enqueue_script('recaptchaapi');
        // wp_register_script('captchajs', plugins_url('assets/js/captchajs.js', __FILE__), array('jquery'), '', 'true');
        // wp_enqueue_script('captchajs');

    }
);
add_action(
    'admin_enqueue_scripts', function () {
        wp_enqueue_style('gutenberg-block-style-contact-form-block', plugins_url('assets/css/editor.css', __FILE__), [], false, 'all');
        // wp_enqueue_style('antd-css', plugins_url('node_modules/antd/dist/antd.css', __FILE__), [], false, 'all');

    }
);

/**
 * Register A Block
 */
add_action(
    'init', function () {
        register_block_type(
            'gutenberg-contact-form-block/contact-form-block',
            [
                'style' => 'gutenberg-block-style-contact-form-block',
                'editor_style' => 'gutenberg-block-style-contact-form-block',
                'editor_scripts' => 'gutenberg-block-editor-script-contact-form-block',
                'render_callback' => 'Cf_Block_Render_callback',
                'attributes' => array(
                    'align' => array(
                        'type' => 'string',
                        'default' => 'none',
                    ),
                    'title' => array(
                        'type' => 'string',
                        'source' => 'html',
                        'selector' => 'h2',
                    ),
                    'subtitle'=>array(
                        'type'=>'string',
                        'source' => 'html',
                        'selector' => 'h3',
                    ),
                    'receipenamecolor' => array(
                        'type' => 'string',
                        'default' => '#111',
                    ),
                    'imagestyle' => array(
                        'type' => 'array',
                        'default' => 'img-rounded',
                    ),
                    'mediaID' => array(
                        'type' => 'number',
                    ),
                    'mediaURL' => array(
                        'type' => 'string',
                        'selector' => 'img',
                        'attribute' => 'src',
                    ),
                    'images' => array(
                        'type' => 'array',
                        'default' => [],
                    ),
                    'ingredients' => array(
                        'type' => 'string',
                        'source' => 'html',
                    ),
                    'subtitlecolor' => array(
                        'type' => 'string',
                        'default' => '#111',
                    ),
                    'bordercolor' => array(
                        'type' => 'string',
                        'default' => '#111',
                    ),
                    'blockcolor' => array(
                        'type' => 'string',
                        'default' => '#ffffff',
                    ),
                    'subcontentcolor' => array(
                        'type' => 'string',
                        'default' => '#111',
                    ),
                    'instructions' => array(
                        'type' => 'string',
                        'selector' => '.steps',
                    ),
                    'imagestyle' => array(
                        'type' => 'string',
                    ),
                    'receipe_category' => array(
                        'type' => 'string',
                    ),
                    'receipe_category' => array(
                        'type' => 'string',
                    ),
                    'border_style' => array(
                        'type' => 'string',
                    ),
                    'preptime' => array(
                        'type' => 'string',
                    ),
                    'cooktime' => array(
                        'type' => 'string',
                    ),
                    'borderradiousvalue' => array(
                        'type' => 'string',
                    ),
                    'paddingtop' => array(
                        'type' => 'string',
                    ),
                    'paddingright' => array(
                        'type' => 'string',
                    ),
                    'paddingbottom' => array(
                        'type' => 'string',
                    ),
                    'paddingleft' => array(
                        'type' => 'string',
                    ),

                    'additional' => array(
                        'type' => 'string',
                    ),
                    'totaltime' => array(
                        'type' => 'string',
                    ),
                    'servings' => array(
                        'type' => 'string',
                    ),
                    'datayield' => array(
                        'type' => 'string',
                    ),
                    'nutrition_facts' => array(
                        'type' => 'string',
                    ),
                    'message' => array(
                        'type' => 'string',
                        'source' => 'html',
                    ),
                    'isFirstNameChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'isLastNameChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'iswhatgender' => array(
                        'type' => 'Boolean',
                    ),
                    'isEmailChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'isPhonenumChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'isMessageChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'isAddressChecked' => array(
                        'type' => 'Boolean',
                    ),
                    'isRecaptchaEnable' => array(
                        'type' => 'Boolean',
                    ),
                    'sitekey' => array(
                        'type' => 'string',
                    ),
                    'secretkey' => array(
                        'type' => 'string',
                    ),
                    'email_to' => array(
                        'type' => 'string',
                    ),
                    'email_subject' => array(
                        'type' => 'string',
                    ),
                    'colorv' => array(
                        'type' => "string",
                        'default' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                    ),
                    'gradientv' => array(
                        'type' => "string",
                        'default' => '#f00',
                    ),
                    'formlayout' => array(
                        'type' => "string",
                    ),
                    'gender_type' => array(
                        'type' => "string",
                    ),

                ),
            ]
        );
    }
);

/**
 * [Cf_Block_Render_callback description]
 *
 * @param [type] $attributes [$attributes description]
 *
 * @return [type] [return description]
 */
function Cf_Block_Render_callback($attributes)
{
    ob_start();

    ?>
    <div class="container">
        <form id="contact" action="" method="POST" enctype="multipart/form-data" style="border-style:<?php esc_attr_e($attributes['border_style']);?>;border-color:<?php esc_attr_e($attributes['bordercolor']);?>;background:<?php esc_attr_e($attributes['gradientv']);?>;border-radius:<?php esc_attr_e($attributes['borderradiousvalue']);?>;padding-top:<?php esc_attr_e($attributes['paddingtop']);?>;padding-left:<?php esc_attr_e($attributes['paddingleft']);?>;padding-right:<?php esc_attr_e($attributes['paddingright']);?>;padding-bottom:<?php esc_attr_e($attributes['paddingbottom']);?>; ">

            <?php
            if (($attributes['formlayout']) == 'one-column') {  ?>

                <h3 class="contact-maintitle" style="color:<?php esc_attr_e($attributes['receipenamecolor']);?>;text-align:<?php esc_attr_e($attributes['align']);?>">
                    <?php esc_attr_e($attributes['title']);?>
                </h3>

                <h4 class="contact-subtitle" style="color:<?php esc_attr_e($attributes['receipenamecolor']);?>;text-align:<?php esc_attr_e($attributes['align']);?>">
                    <?php esc_attr_e($attributes['subtitle']);?>
                </h4>
                
                <div class="form-field">
                    <?php if (($attributes['isFirstNameChecked']) == 1) {?>                
                        <fieldset class="onecolumnfieldset">
                                <input placeholder="Your name" type="text" id="first_name" tabindex="1"  name="first_name" required autofocus>
                        </fieldset>

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['isLastNameChecked']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <input id="last_name" placeholder="Enter last name" name="last_name" type="text" tabindex="2" required>
                        </fieldset>      

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['iswhatgender']) == 1) {?>
                        <fieldset class="onecolumnfieldset radiofieldset">
                                <input id="Male" type="radio" name="user_gender" value="Male"><label for="Male"><span></span>Male</label>
                                <input id="Female" type="radio" name="user_gender" value="Female"><label for="Female"><span></span>Female</label>
                        </fieldset> 

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['isEmailChecked']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <input id="email" placeholder="Enter email" name="email" type="email" tabindex="2" required>
                        </fieldset>

                        <?php } else {_e('');
                    }?>
            
                    <?php if (($attributes['isPhonenumChecked']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <input placeholder="Your Phone Number" type="tel" tabindex="3" id="c_number"name="c_number" required>
                        </fieldset>

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['isAddressChecked']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <input placeholder="Your Address" type="text" tabindex="3" id="address" name="address" required>
                        </fieldset>

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['isMessageChecked']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <textarea placeholder="Type your Message Here...." id="message" name="message" rows="4" cols="50"></textarea>
                        </fieldset>

                        <?php } else {_e('');
                    }?>

                    <?php if (($attributes['isRecaptchaEnable']) == 1) {?>
                        <fieldset class="onecolumnfieldset">
                                <div class="g-recaptcha" id="rcaptcha" data-theme="dark"  data-sitekey="<?php esc_attr_e($attributes['sitekey']);?>"></div>
                                <span id="captcha" style="color:red"></span>
                        </fieldset>

                        <?php } else {_e('');
                    }?>
                                            
                </div>
            
                <?php
    } elseif (($attributes['formlayout']) == 'two-column') {
            ?>

            <div class="row">
                <?php if (($attributes['isFirstNameChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>First name:</label>
                        <input class="form-control" name="first_name" type="text" />
                    </div>

                <?php } else {_e(''); }?>

                <?php if (($attributes['isLastNameChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>Last name:</label>
                        <input class="form-control" name="last_name" type="text" />
                    </div>

                <?php } else {_e(''); }?>

                <?php if (($attributes['isEmailChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>Email:</label>
                        <input class="form-control" name="email" type="text" required/>
                    </div>

                <?php } else {_e(''); }?>

                <?php if (($attributes['isPhonenumChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>Contact No:</label>
                        <input class="form-control" name="c_number" type="text" required/>
                    </div>

                <?php } else {_e(''); }?>

                <?php if (($attributes['isAddressChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>Address:</label>
                        <input class="form-control" name="address" type="text" />
                    </div>

                <?php } else { _e(''); }?>

                <?php if (($attributes['isMessageChecked']) == 1) {?>
                    <div class="col-xs-6 form-group">
                        <label>Message:</label>
                        <textarea id="message" class="form-control" name="message" rows="4" cols="50"></textarea>
                    </div>

                <?php } else {_e(''); }?>

                <?php if (($attributes['isRecaptchaEnable']) == 1) {?>
                    <div class="col-xs-12 form-group">
                        <div class="g-recaptcha"  id="rcaptcha" data-sitekey="<?php esc_attr_e($attributes['sitekey']);?>"></div>
                        <span id="captcha" style="color:red"></span>
                    </div>
                <?php } else {_e(''); }?>

                <?php } ?>


                   
                <?php
                if (($attributes['formlayout']) == 'one-column'){
                    ?>
                    <fieldset class="onecolumnfieldset">
                        <input type="submit" id="submit" class="btn btn-success p-0" name="gutenberg_form_submit" >
                    </fieldset>    
                    <?php
                } else {
                    ?>
                    <div class="col-xs-12 form-group">
                        <input type="submit" id="submit" class="btn btn-success p-0" name="gutenberg_form_submit">
                    </div>
                    <?php
                }
                ?>    
            </div>

        </form>
    </div>

    <?php
if (!empty($_POST['gutenberg_form_submit'])) {
        if (($attributes['formlayout']) == 'one-column' || ($attributes['formlayout']) == 'two-column') {
            if (($attributes['isFirstNameChecked']) == 1) {
                $firstname = sanitize_text_field($_POST['first_name']);
            }
            if (($attributes['isLastNameChecked']) == 1) {
                $last_name = sanitize_text_field($_POST['last_name']);
            }
            
            if (($attributes['isEmailChecked']) == 1) {
                $email = sanitize_email($_POST['email']);
            }

            if (($attributes['iswhatgender']) == 1) {
                $user_gender = sanitize_text_field($_POST['user_gender']);
            }

            if (($attributes['isPhonenumChecked']) == 1) {
                $c_number = sanitize_text_field($_POST['c_number']);
            }
            if (($attributes['isAddressChecked']) == 1) {
                $address = sanitize_text_field($_POST['address']);
            }
            if (($attributes['isMessageChecked']) == 1) {
                $message = sanitize_textarea_field($_POST['message']);
            }

            $to = $attributes['email_to'];
            $subject = $attributes['email_subject'];
            $body = "First name is $firstname $last_name  & email id is $email Gender us is $user_gender & PHone number is $c_number  $address $message. ";
            $separator = md5(time());
            $headers = "MIME-Version: 1.0";
            $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"";
            $headers .= "Content-Transfer-Encoding: 7bit";

            wp_mail($to, $subject, $body, $headers);
        } else {
            _e('');
        }
    }
    return ob_get_clean();

}