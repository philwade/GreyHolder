GreyHolder
=========
GreyHolder is jQuery plugin that provides a nice way of displaying inactive default values for html inputs.

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

