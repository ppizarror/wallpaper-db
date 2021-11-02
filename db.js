/**
 The MIT License (MIT)

 Copyright 2017-2021 Pablo Pizarro R.

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
 * Lista de wallpapers
 * @type {*[]}
 * @private
 */
_wallpaperdb_images = [
    ['09305524.jpg', 'center', '#333333'], // 0
    ['67535412.jpg', 'bottom', '#99afd0'], // 1
    ['95686782.jpg', 'bottom', '#3e224f'], // 2
    ['93314696.jpg', 'center', '#0f0e0f'], // 3
    ['12939392.jpg', 'center', '#b7a689'], // 4
    ['19392139.jpg', 'center', '#1a150f'], // 5
    ['46140562.jpg', 'center', '#28343c'], // 6
    ['37320735.jpg', 'bottom', '#343333'], // 7
    ['71453949.jpg', 'top', '#37333b'], // 8
    ['39581671.jpg', 'bottom', '#1c1f2d'], // 9
    ['99206040.jpg', 'bottom', '#658aa8'], // 10
    ['92910382.jpg', 'bottom', '#080808'], // 11
    ['04274037.jpg', 'top', '#090706'], // 12
    ['72131838.jpg', 'center', '#050404'], // 13
    ['80718230.jpg', 'bottom', '#342c4c'], // 14
    ['08038477.jpg', 'center', '#0a0a09'], // 15
    ['22532189.jpg', 'bottom', '#050506'], // 16
    ['07086832.jpg', 'top', '#3b4149'], // 17
    ['11917378.jpg', 'bottom', '#2e2e2e'], // 18
    ['11944943.jpg', 'bottom', '#3e5d74'], // 19
    ['15032996.jpg', 'bottom', '#3a4a4e'], // 20
    ['37994916.jpg', 'center', '#252562'], // 21
    ['63330443.jpg', 'top', '#090e15'], // 22
    ['46199258.jpg', 'bottom', '#2b2932'], // 23
    ['39593777.jpg', 'bottom', '#306bcc'], // 24
    ['47702546.jpg', 'bottom', '#0c051e'], // 25
    ['51280378.jpg', 'center', '#263042'], // 26
    ['80794446.jpg', 'center', '#171611'], // 27
    ['36752157.jpg', 'center', '#fbc4d4'], // 28
    ['42450256.jpg', 'bottom', '#645c80'], // 29
    ['89228305.jpg', 'bottom', '#382d27'], // 30
    ['95243003.jpg', 'bottom', '#163b64'], // 31
    ['16978868.jpg', 'center', '#c79156'], // 32
    ['22125894.jpg', 'bottom', '#272D69'], // 33
    ['77421788.jpg', 'center', '#7b7a7a'], // 34
    ['91643340.jpg', 'bottom', '#297b2f'], // 35
    ['88093858.jpg', 'bottom', '#d3e393'], // 36
    ['00939591.jpg', 'center', '#262d41'], // 37
    ['13838368.jpg', 'center', '#544444'], // 38
    ['14269512.jpg', 'center', '#6689d6'], // 39
    ['37882132.jpg', 'bottom', '#e8e4e7'], // 40
    ['38920979.jpg', 'bottom', '#81a7c3'], // 41
    ['39850828.jpg', 'center', '#51698b'], // 42
    ['50989454.jpg', 'top', '#886647'], // 43
    ['57231197.jpg', 'bottom', '#282635'], // 44
    ['91853601.jpg', 'bottom', '#2b0771'], // 45
    ['03081592.jpg', 'bottom', '#8a9292'], // 46
    ['15877230.jpg', 'center', '#070b16'], // 47
    ['25528122.jpg', 'bottom', '#0c0b0b'], // 48
    ['29656367.jpg', 'center', '#3c6bc8'], // 49
    ['38184232.jpg', 'bottom', '#5fabfb'], // 50
    ['44532443.jpg', 'center', '#4c4c4c'], // 51
    ['45325963.jpg', 'bottom', '#2b4f5e'], // 52
    ['60192994.jpg', 'bottom', '#402e4b'], // 53
    ['62639926.jpg', 'bottom', '#e7e6e6'], // 54
    ['65354463.jpg', 'bottom', '#e5e9ed'], // 55
    ['65737758.jpg', 'center', '#a17e82'], // 56
    ['66539241.jpg', 'center', '#b64a04'], // 57
    ['71516908.jpg', 'center', '#4a4651'], // 58
    ['73822546.jpg', 'bottom', '#547689'], // 59
    ['80768085.jpg', 'bottom', '#12172b'], // 60
    ['93568387.jpg', 'bottom', '#253646'], // 61
    ['97469752.jpg', 'center', '#bc4934'], // 62
    ['02530621.jpg', 'center', '#868686'], // 63
    ['02534697.jpg', 'top', '#1c2229'], // 64
    ['02642756.jpg', 'center', '#0c0e22'], // 65
    ['03625208.jpg', 'center', '#82868a'], // 66
    ['05378902.jpg', 'bottom', '#141b27'], // 67
    ['09553028.jpg', 'center', '#44535b'], // 68
    ['16845918.jpg', 'center', '#520031'], // 69
    ['18027342.jpg', 'center', '#334272'], // 70
    ['26185627.jpg', 'bottom', '#b5a8fb'], // 71
    ['30915665.jpg', 'bottom', '#47498e'], // 72
    ['31865394.jpg', 'bottom', '#df7596'], // 73
    ['32064937.jpg', 'top', '#4a4c46'], // 74
    ['39295944.jpg', 'center', '#4a4c46'], // 75
    ['45515453.jpg', 'center', '#24abe3'], // 76
    ['58763802.jpg', 'center', '#1d1d1a'], // 77
    ['64402687.jpg', 'center', '#425396'], // 78
    ['64597743.jpg', 'bottom', '#21192c'], // 79
    ['65086685.jpg', 'bottom', '#5f747b'], // 80
    ['71169273.jpg', 'center', '#0472af'], // 81
    ['79989977.jpg', 'top', '#15253c'], // 82
    ['82956328.jpg', 'bottom', '#344c74'], // 83
    ['83984226.jpg', 'top', '#741e27'], // 84
    ['86588736.jpg', 'center', '#cccccc'], // 85
    ['94052111.jpg', 'center', '#565656'], // 86
    ['94936130.jpg', 'center', '#0c0909'], // 87
    ['97039416.jpg', 'bottom', '#cdcece'], // 88
    ['07949312.jpg', 'bottom', '#86a4b4'], // 89
    ['08760783.jpg', 'bottom', '#040a0d'], // 90
    ['33459034.jpg', 'center', '#8b8278'], // 91
    ['42501581.jpg', 'bottom', '#304e63'], // 92
    ['50861756.jpg', 'center', '#34352c'], // 93
    ['68963144.jpg', 'center', '#3e2a1a'], // 94
    ['70290917.jpg', 'center', '#1e1818'], // 95
    ['91686162.jpg', 'bottom', '#b3ae9e'], // 96
    ['05327721.jpg', 'top', '#4e4f6f'], // 97
    ['19489238.jpg', 'bottom', '#96969f'], // 98
    ['27241217.jpg', 'center', '#0d0d1c'], // 99
    ['31534692.jpg', 'bottom', '#65644a'], // 100
    ['45125712.jpg', 'center', '#b9814c'], // 101
    ['59272533.jpg', 'center', '#141c2b'], // 102
    ['82884717.jpg', 'bottom', '#c26684'], // 103
    ['88649909.jpg', 'center', '#1f1e32'], // 104
    ['10234950.jpg', 'center', '#6f5b41'], // 105
    ['20113328.jpg', 'center', '#2d529b'], // 106
    ['37809603.jpg', 'center', '#696868'], // 107
    ['81749653.jpg', 'bottom', '#84a39a'], // 108
    ['98072701.jpg', 'center', '#3b2a1e'], // 109
    ['48432526.jpg', 'bottom', '#3c3c3c'], // 110
    ['1454360.jpg', 'top', '#b49e69'], // 111
    ['89174898.jpg', 'center', '#0f3574'], // 112
    ['15579380.jpg', 'bottom', '#8e9fa9'], // 113
    ['15579382.jpg', 'center', '#a7aaaf'], // 114
    ['23542276.jpg', 'center', '#725f62'], // 115
    ['29017875.jpg', 'center', '#373d38'], // 116
    ['42860664.jpg', 'center', '#636a87'], // 117
    ['44632291.jpg', 'center', '#383a28'], // 118
    ['63257360.jpg', 'center', '#2b2725'], // 119
    ['72490260.jpg', 'center', '#7f997c'], // 120
    ['88649564.jpg', 'center', '#b4bbb8'], // 121
    ['14815894.jpg', 'center', '#6a7482'], // 122
    ['28076516.jpg', 'center', '#171006'], // 123
    ['03056451.jpg', 'center', '#090e1d'], // 124
    ['03935937.jpg', 'bottom', '#8b697e'], // 125
    ['29852903.jpg', 'center', '#131313'], // 126
    ['39819016.jpg', 'bottom', '#302c1d'], // 127
    ['61079095.jpg', 'center', '#565776'], // 128
    ['62656344.png', 'center', '#d06dd2'], // 129
    ['63814927.jpg', 'center', '#45596d'], // 130
    ['76018829.jpg', 'center', '#221e1b'], // 131
    ['83445668.jpg', 'center', '#2a2826'], // 132
    ['28076516.jpg', 'center', '#e0e0e0'], // 133
];

/**
 * Se obtiene un elemento al azar
 * @type {{image: string, position: *, color: *, index: number | *}}
 */
let wallpaper_db = {
    'image': '',
    'position': '',
    'color': '',
    'index': -1
};

/**
 * Establece la imagen.
 *
 * @param {number=} $id - ID, si es nulo o 0, define uno aleatorio
 */
function wallpaper_db_set_image($id) {
    if ($id === undefined || $id < 0 || $id >= _wallpaperdb_images.length) {
        $id = Math.floor(Math.random() * (_wallpaperdb_images.length + 1));
    }
    wallpaper_db.image = 'img/' + _wallpaperdb_images[$id][0];
    wallpaper_db.position = _wallpaperdb_images[$id][1];
    wallpaper_db.color = _wallpaperdb_images[$id][2];
    wallpaper_db.index = $id;
}

// Establece un fondo aleatorio
wallpaper_db_set_image();

/**
 * Genera blur en una imagen.
 *
 * @param {string} $idelem - Identificador del objeto a hacer blur
 * @param {number} $blurprobability - Límites probabilidad de blur
 * @param {array} $blur_limits - Límites probabilidad de blur
 */
function wallpaper_db_random_blur($idelem, $blurprobability, $blur_limits) {
    if (Math.random() <= $blurprobability / 100) {
        for (let i = 0; i < 100; i++) {
            // noinspection JSCheckFunctionSignatures
            let blur = parseInt(Math.random() * 100);
            if (blur >= $blur_limits[0] && blur <= $blur_limits[1]) {
                if ($idelem[0] === '#') {
                    $idelem = $idelem.substring(1)
                }
                document.getElementById($idelem).style.filter = 'blur(' + blur + 'px)';
                document.getElementById($idelem).style.transform = 'scale(1.05)';
            }
        }
    }
}