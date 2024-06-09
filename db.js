/**
 The MIT License (MIT)

 Copyright 2017 Pablo Pizarro R.

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
    ['95686782.jpg', 'bottom', '#351e44'], // 2
    ['93314696.jpg', 'center', '#0f0e0f'], // 3
    ['24543748.jpg', 'bottom', '#2b4b53'], // 4
    ['00139801.jpg', 'center', '#4b4f41'], // 5
    ['16806855.jpg', 'center', '#70567f'], // 6
    ['37320735.jpg', 'bottom', '#343333'], // 7
    ['16309882.gif', 'center', '#131d25'], // 8
    ['39581671.jpg', 'bottom', '#1c1f2d'], // 9
    ['99206040.jpg', 'bottom', '#658aa8'], // 10
    ['63257360.jpg', 'center', '#2b2725'], // 11
    ['01972284.jpg', 'center', '#644e5c'], // 12
    ['03056451.jpg', 'center', '#090e1d'], // 13
    ['80718230.jpg', 'bottom', '#342c4c'], // 14
    ['08038477.jpg', 'center', '#0a0a09'], // 15
    ['22532189.jpg', 'bottom', '#050506'], // 16
    ['07086832.jpg', 'top', '#3b4149'], // 17
    ['11917378.jpg', 'bottom', '#2e2e2e'], // 18
    ['15759723.jpg', 'bottom', '#222222'], // 19
    ['15032996.jpg', 'bottom', '#3a4a4e'], // 20
    ['37994916.jpg', 'center', '#252562'], // 21
    ['63330443.jpg', 'top', '#090e15'], // 22
    ['46199258.jpg', 'bottom', '#2b2932'], // 23
    ['39593777.jpg', 'bottom', '#306bcc'], // 24
    ['47702546.jpg', 'bottom', '#0c051e'], // 25
    ['51280378.jpg', 'center', '#263042'], // 26
    ['61079095.jpg', 'center', '#565776'], // 27
    ['63814927.jpg', 'center', '#45596d'], // 28
    ['42450256.jpg', 'bottom', '#645c80'], // 29
    ['14815894.jpg', 'center', '#6a7482'], // 30
    ['95243003.jpg', 'bottom', '#163b64'], // 31
    ['16978868.jpg', 'center', '#c79156'], // 32
    ['95223720.jpg', 'center', '#1a1828'], // 33
    ['77421788.jpg', 'center', '#7b7a7a'], // 34
    ['88649564.jpg', 'center', '#b4bbb8'], // 35
    ['88093858.jpg', 'bottom', '#d3e393'], // 36
    ['00939591.jpg', 'center', '#262d41'], // 37
    ['13838368.jpg', 'center', '#544444'], // 38
    ['14269512.jpg', 'center', '#6689d6'], // 39
    ['37882132.jpg', 'bottom', '#e8e4e7'], // 40
    ['38920979.jpg', 'bottom', '#81a7c3'], // 41
    ['39850828.jpg', 'center', '#51698b'], // 42
    ['50989454.jpg', 'top', '#886647'], // 43
    ['57231197.jpg', 'bottom', '#282635'], // 44
    ['91853601.jpg', 'bottom', '#25065b'], // 45
    ['03081592.jpg', 'bottom', '#8a9292'], // 46
    ['15877230.jpg', 'center', '#070b16'], // 47
    ['25528122.jpg', 'bottom', '#0c0b0b'], // 48
    ['29656367.jpg', 'center', '#3c6bc8'], // 49
    ['38184232.jpg', 'bottom', '#4883bb'], // 50
    ['60374209.jpg', 'center', '#7e4c53'], // 51
    ['45325963.jpg', 'bottom', '#2b4f5e'], // 52
    ['16714762.jpg', 'center', '#1c0b1d'], // 53
    ['62639926.jpg', 'bottom', '#e7e6e6'], // 54
    ['65354463.jpg', 'bottom', '#e5e9ed'], // 55
    ['29852903.jpg', 'center', '#131313'], // 56
    ['66539241.jpg', 'center', '#b64a04'], // 57
    ['28076516.jpg', 'center', '#e0e0e0'], // 58
    ['73822546.jpg', 'bottom', '#547689'], // 59
    ['80768085.jpg', 'bottom', '#12172b'], // 60
    ['44632291.jpg', 'center', '#383a28'], // 61
    ['97469752.jpg', 'center', '#bc4934'], // 62
    ['02530621.jpg', 'center', '#868686'], // 63
    ['07866639.jpg', 'center', '#5c6a85'], // 64
    ['02642756.jpg', 'center', '#0c0e22'], // 65
    ['66554960.jpg', 'center', '#cfcdbb'], // 66
    ['75100330.jpg', 'bottom', '#2b2d3b'], // 67
    ['40473882.jpg', 'center', '#142e4a'], // 68
    ['16845918.jpg', 'center', '#520031'], // 69
    ['18027342.jpg', 'center', '#334272'], // 70
    ['90606624.jpg', 'center', '#3d316d'], // 71
    ['30915665.jpg', 'bottom', '#47498e'], // 72
    ['31865394.jpg', 'bottom', '#df7596'], // 73
    ['60480110.jpg', 'center', '#0f3977'], // 74
    ['16310424.jpg', 'center', '#668bb0'], // 75
    ['16304323.jpg', 'center', '#d8e4dc'], // 76
    ['58763802.jpg', 'center', '#1d1d1a'], // 77
    ['64402687.jpg', 'center', '#425396'], // 78
    ['96494556.jpg', 'center', '#4f312a'], // 79
    ['93487592.jpg', 'center', '#37283e'], // 80
    ['24952843.jpg', 'center', '#040404'], // 81
    ['03299959.jpg', 'center', '#27213d'], // 82
    ['03935937.jpg', 'bottom', '#8b697e'], // 83
    ['83984226.jpg', 'top', '#741e27'], // 84
    ['28076516.jpg', 'center', '#171006'], // 85
    ['42860664.jpg', 'center', '#636a87'], // 86
    ['94936130.jpg', 'center', '#0c0909'], // 87
    ['97039416.jpg', 'bottom', '#cdcece'], // 88
    ['12262224.jpg', 'bottom', '#8fa6b6'], // 89
    ['08760783.jpg', 'bottom', '#040a0d'], // 90
    ['33459034.jpg', 'center', '#8b8278'], // 91
    ['42501581.jpg', 'bottom', '#304e63'], // 92
    ['16306154.jpg', 'center', '#2e2827'], // 93
    ['16304167.jpg', 'bottom', '#1e1e1e'], // 94
    ['25834954.gif', 'center', '#0c2959'], // 95
    ['72490260.jpg', 'center', '#7f997c'], // 96
    ['05327721.jpg', 'top', '#4e4f6f'], // 97
    ['19489238.jpg', 'bottom', '#96969f'], // 98
    ['27241217.jpg', 'center', '#0d0d1c'], // 99
    ['31534692.jpg', 'bottom', '#65644a'], // 100
    ['45125712.jpg', 'center', '#b9814c'], // 101
    ['16301851.jpg', 'center', '#282a2a'], // 102
    ['82884717.jpg', 'bottom', '#c26684'], // 103
    ['88649909.jpg', 'center', '#1f1e32'], // 104
    ['14732961.jpg', 'center', '#bfb9b6'], // 105
    ['20113328.jpg', 'center', '#2d529b'], // 106
    ['37809603.jpg', 'center', '#696868'], // 107
    ['81749653.jpg', 'bottom', '#84a39a'], // 108
    ['29017875.jpg', 'center', '#373d38'], // 109
    ['48432526.jpg', 'bottom', '#3c3c3c'], // 110
    ['59942285.jpg', 'center', '#1e211c'], // 111
    ['89174898.jpg', 'center', '#0f3574'], // 112
    ['15579380.jpg', 'bottom', '#8e9fa9'], // 113
    ['15579382.jpg', 'center', '#a7aaaf'], // 114
    ['23542276.jpg', 'center', '#725f62'], // 115
    ['32064937.jpg', 'top', '#4a4c46'], // 116
];

/**
 * Se obtiene un elemento al azar
 * @type {{image: string, position: string, color: string, index: number}}
 */
let wallpaper_db = {
    'color': '',
    'image': '',
    'index': -1,
    'position': '',
};

// noinspection JSUnusedGlobalSymbols
/**
 * Query a given color to match target brightness.
 *
 * @param {(function(string): *|{
 *      brighten: (function(number): *),
 *      darken: (function(number): *),
 *      getBrightness: (function(): number),
 * })} $tinycolor - Tinycolor library reference
 * @param {number} $target_brightness - Target reference
 * @param {string|null|*=} $target_color - Which color to consider
 * @param {boolean=} $log - If true, logs new brightness
 * @returns {*} - Color
 */
function wallpaper_db_query_color($tinycolor, $target_brightness, $target_color, $log) {
    if (!$target_color) $target_color = wallpaper_db.color;
    if ($target_color.hasOwnProperty('toHexString')) $target_color = $target_color.toHexString();
    // if ($log === undefined) $log = true;
    let $wcolor = $tinycolor($target_color);
    let $wbright = $wcolor.getBrightness();
    let $less_than_target = $wbright < $target_brightness;
    let $i;
    let $factor = 1;
    for ($i = 1; $i <= 200; $i += 1) {
        let $ci = $tinycolor($target_color);
        if ($less_than_target) {
            $ci.brighten($factor);
        } else {
            $ci.darken($factor);
        }
        let $dc = Math.abs($ci.getBrightness() - $target_brightness);
        if ($dc > 50) {
            $factor += 15;
        } else if ($dc > 25) {
            $factor += 10;
        } else if ($dc > 10) {
            $factor += 1;
        } else if ($dc > 5) {
            $factor += 0.5;
        } else if ($dc > 1) {
            $factor += 0.25;
        } else if ($dc > 0.5) {
            $factor += 0.125;
        } else {
            $factor += 0.1;
        }
        if (($less_than_target && $ci.getBrightness() >= $target_brightness) || (!$less_than_target && $ci.getBrightness() <= $target_brightness)) {
            $wcolor = $ci;
            break;
        }
    }
    if ($log) console.log('Updating color from brightness ' + $wbright.toString() + ' to ' + $wcolor.getBrightness().toString() + ' in ' + $i.toString() + ' iterations');
    return $wcolor;
}

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
                if ($idelem[0] === '#') $idelem = $idelem.substring(1)
                document.getElementById($idelem).style.filter = 'blur(' + blur + 'px)';
                document.getElementById($idelem).style.transform = 'scale(1.05)';
            }
        }
    }
}

/**
 * Establece la imagen.
 *
 * @param {number|null=} $id - ID, si es nulo o 0, define uno aleatorio
 */
function wallpaper_db_set_image($id) {
    if ($id === undefined || $id === null || $id < 0 || $id >= _wallpaperdb_images.length) {
        $id = Math.floor(Math.random() * _wallpaperdb_images.length);
    }
    wallpaper_db.image = 'https://github.ppizarror.com/wallpaper-db/img/' + _wallpaperdb_images[$id][0];
    wallpaper_db.position = _wallpaperdb_images[$id][1];
    wallpaper_db.color = _wallpaperdb_images[$id][2];
    wallpaper_db.index = $id;
}

// Establece un fondo aleatorio
wallpaper_db_set_image();