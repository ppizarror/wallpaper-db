from colorthief import ColorThief

color_thief = ColorThief('img/09305524.jpg')

# get the dominant color
dominant_color = color_thief.get_color(quality=1)
print('#%02x%02x%02x' % dominant_color)