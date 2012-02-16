/*
 * GreyHolder v0.1 - jQuery Plugin
 * Copyright (c) 2012 Phil Wade <phil@philwade.org>
 *
 * Provided under the MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * For the latest version, visit bitbucket: https://bitbucket.org/pivotal/greyholder
 */
(function($){

$.fn.greyHolder = function(params){
        var defaults = $.extend({
            inactive_class : 'greyHolder',
            active_class : '',
            default_value_attribute : 'default'
        }, params);

        return this.each(function(){
            var existingVal = $(this).val();
            $(this).attr(defaults.default_value_attribute, existingVal);

            if(!$(this).hasClass(defaults.inactive_class))
            {
                $(this).addClass(defaults.inactive_class);
            }

            $(this).bind('focus.greyHolder', function(){
                var value = $(this).val();

                // When focused, only clear the input if it contains the default
                // value.
                if(value == $(this).attr(defaults.default_value_attribute))
                {
                    $(this).val('');
                    $(this).addClass(defaults.active_class);
                    $(this).removeClass(defaults.inactive_class);
                }
            });

            $(this).bind('blur.greyHolder', function(){
                var value = $(this).val();

                if(value == '')
                {
                    var base = $(this).attr(defaults.default_value_attribute);
                    $(this).addClass(defaults.inactive_class);
                    $(this).removeClass(defaults.active_class);
                    $(this).val(base);
                }
            });
        });
    };
})(jQuery);
