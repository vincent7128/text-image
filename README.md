Text Image
======

## About

Convert text to image. Work with unicode and web font like [FontAwesome](), you can use emoji too. 🚀

#### [📺 Live Demo](https://vincent7128.github.io/text-image/)

## Usage

```
var message = 'MESSAGE';
var textImage = TextImage();
var img1 = textImage.toImage(message);

// change style
var style = {
    font: 'serif',
    color: 'red',
    size: 18,
};
textImage.setStyle(style);
var img2 = textImage.toImage(message);

// to dataURL
var data = textImage.toDataURL(message);
```

### Style

The default style object

```
{
    font: 'Sans-serif',
    color: '#000000',
    size: 16
}
```

#### font

The font property like css font-family and you can use web fonts like FontAwesome.

#### color

The color property like css color.

```
/* <named-color> values */
color: red
color: orange
color: tan
color: rebeccapurple

/* <hex-color> values */
color: #090
color: #009900
color: #090a
color: #009900aa

/* <rgb()> values */
color: rgb(34, 12, 64, 0.6)
color: rgba(34, 12, 64, 0.6)
color: rgb(34 12 64 / 0.6)
color: rgba(34 12 64 / 0.3)

/* <hsl()> values */
color: hsl(30, 100%, 50%, 0.6)
color: hsla(30, 100%, 50%, 0.6)
color: hsl(30 100% 50% / 0.6)
color: hsla(30 100% 50% / 0.6)
```

#### size

The size property is the font size, just use numbers.

## License

This project is licensed under the MIT License - see the [LICENSE](blob/master/LICENSE) file for details
