$(document).ready(function() {
    // Renk seçici için olay dinleyicisi
    $('#colorPicker').on('input', function() {
        var selectedColor = $(this).val();
        $('body').css('background-color', selectedColor);
    });

    // Rastgele renk seçici için olay dinleyicisi
    $('#randomColorButton').on('click', function() {
        var randomColor = getRandomColor();
        $('body').css('background-color', randomColor);
    });

    // Rastgele renk oluşturma fonksiyonu
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
