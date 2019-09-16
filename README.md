<h1 align="center">
  <a href="https://ppizarror.com/wallpaper-db/" title="Wallpaper-db">
    <img alt="Wallpaper-db" src="https://ppizarror.com/icon.png" width="200px" height="200px" />
  </a>
  <br /><br />
  Wallpaper-db</h1>
<p align="center">Repositorio de wallpapers usados por distintas páginas de <a href='https://ppizarror.com'>ppizarror.com</a></p>
<div align="center"><a href="https://ppizarror.com"><img alt="@ppizarror" src="https://ppizarror.com/badges/autor.svg" /></a>
<a href="https://opensource.org/licenses/MIT/"><img alt="Licencia MIT" src="https://ppizarror.com/badges/licenciamit.svg" /></a>
</div><br />

## Modo uso

### Obtener una imagen de forma aleatoria
1. Importar libreria js:

```javascript
<script type="text/javascript" src="http://ppizarror.com/wallpaper-db/db.min.js"></script>
```

2. Usar la imagen seleccionada de forma aleatoria utilizando la variable *wallpaper_db*:

```javascript
wallpaper_db.image    // Url imagen seleccionada
wallpaper_db.position // Posición de la imagen
wallpaper_db.color    // Color predominante de la imagen
wallpaper_db.index    // Índice de la imagen escogida en la db
```

### Funciones extras
```wallpaper_db_random_blur(idelem, blurprobability, blurlimits)```: Genera el efecto blur a un div *idelem* con una probabilidad de *blurprobability* (entre 0, 100) con valor límite entre *blurlimits*.
```javascript
wallpaper_db_random_blur('#background-div', 30, [3, 10]);
```

## Licencia
Este proyecto está licenciado bajo la licencia MIT [https://opensource.org/licenses/MIT]

## Autor
<a href="https://ppizarror.com" title="ppizarror">Pablo Pizarro R.</a> | 2017
