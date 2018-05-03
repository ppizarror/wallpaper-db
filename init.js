/**
 The MIT License (MIT)

 Copyright 2017-2018 Pablo Pizarro R.

 Permission is hereby granted, free of charge, to any person obtaining a
 copy of this software and associated documentation files (the "Software"),
 to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense,
 and/or sell copies of the Software, and to permit persons to whom the Software
 is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Funciones al cargar la página web
 */
$(function ($) {

    /**
     * Fondos
     */
    let $bgcolored = $('#background-page-header-colored');
    let $bgheader = $('#background-page-header');

    /**
     * Se establece un fondo aleatorio
     */
    $bgcolored.css('background-color', wallpaper_db.color);
    $bgcolored.fadeIn(200);
    console.log('Estableciendo el fondo de pantalla ' + wallpaper_db.index);

    /**
     * Se carga la imagen
     * @type {HTMLImageElement}
     */
    let back_img = new Image();
    back_img.onload = function () {
        $bgheader.css({
            'background': wallpaper_db.color + ' url(' + wallpaper_db.image + ') ' + wallpaper_db.position + ' no-repeat fixed',
            'background-attachment': 'fixed',
        });
        $bgheader.css('-webkit-background-size', 'cover');
        $bgheader.css('-moz-background-size', 'cover');
        $bgheader.css('-o-background-size', 'cover');
        $bgheader.css('background-size', 'cover');
        $bgheader.css('width', $(window).width());
        wallpaper_db_random_blur('#background-page-header', 50, [3, 10]);
        setTimeout(function () {
            $('#background-page-header-colored').fadeOut('slow');
        }, 500);
    };
    back_img.src = wallpaper_db.image;

    /**
     * Se añade evento resize del fondo
     */
    $(window).on('resize.bgPageHeader', function () {
        $('#background-page-header').css('width', $(window).width());
    });
});