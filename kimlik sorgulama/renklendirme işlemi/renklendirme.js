$(document).ready(function() {
   
    $('#colorPicker').on('input', function() {
        var selectedColor = $(this).val();
        $('body').css('background-color', selectedColor);
    });

   
    $('#randomColorButton').on('click', function() {
        var randomColor = getRandomColor();
        $('body').css('background-color', randomColor);
    });

   
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
