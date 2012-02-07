GreyHolder
=========
GreyHolder is jQuery plugin that provides a nice way of displaying inactive default values for html inputs. When active, the input 'wakes up' and displays text normally. When it loses focus, if unfilled, the default value and style will return.

Quickstart
---------
To use GreyHolder, include both the css and js files on your page, along with jQuery. Then call greyHolder on the inputs you would like to grey out, also providing sensible default values.

    <link rel="stylesheet" type="text/css" href="css/greyholder.css">

    <input id="greyMeOut" value="(I'm grey)"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="js/greyholder.js"></script>
    <script>
        $(document).ready(function(){
            $('#greyMeOut').greyHolder();
        });
    </script>

To see it in action, check out the demo included in the repository.

Settings
--------
GreyHolder also takes a few settings if the defaults don't work for you.

    $('#greyMeOut').greyHolder({
        'inactive_class' : 'greyHolder', #the class given to inputs when inactive
        'active_class' : '', #class added to input when it becomes active
        'default_value_attribute': 'default' #the html attribute used to store the default value for an input
    });
