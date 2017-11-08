Text Image
======

## About
[📺 Live Demo](https://vincent7128.github.io/text-image/)  
Convert text to image. Work with unicode and web font like [FontAwesome](http://fontawesome.io/), you can use emoji too. 🚀

## Usage
NPM:
```
npm install text-image
```
CDN:
```
<script src="https://cdn.jsdelivr.net/npm/text-image/dist/text-image.js"></script>
```
Code example:
```
// create new TextImage object
var textImage1 = TextImage();

// create new TextImage object with customize style
var style = {
    font: 'serif',
    align: 'center',
    color: 'red',
    size: 18,
    background: 'white',
    stroke: 1,
    strokeColor: 'rgba(0, 0, 0, 1)'
};
var textImage2 = TextImage(style);

// convert text message to image element
var img = textImage.toImage('MESSAGE');

// convert text message to base64 dataURL
var data = textImage.toDataURL(message);

// change style
textImage.setStyle(style);
```

### Style object

The default style object

```
{
    font: 'Sans-serif',
    align: 'left',
    color: '#000000',
    size: 16,
    background: 'rgba(0, 0, 0, 0)',
    stroke: 0,
    strokeColor: '#FFFFFF'
}
```

#### font

The font property like css font-family and you can use web fonts like FontAwesome.

#### align
The align property specifies the horizontal alignment of text, use 'left', 'center' or 'right'.

#### color & background & strokeColor

The color, background and strokeColor property like css color.

```
/* <named-color> values */
color: 'red'
color: 'orange'
color: 'tan'
color: 'rebeccapurple'

/* <hex-color> values */
color: '#090'
color: '#009900'
color: '#090a'
color: '#009900aa'

/* <rgb()> values */
color: 'rgb(34, 12, 64, 0.6)'
color: 'rgba(34, 12, 64, 0.6)'
color: 'rgb(34 12 64 / 0.6)'
color: 'rgba(34 12 64 / 0.3)'

/* <hsl()> values */
color: 'hsl(30, 100%, 50%, 0.6)'
color: 'hsla(30, 100%, 50%, 0.6)'
color: 'hsl(30 100% 50% / 0.6)'
color: 'hsla(30 100% 50% / 0.6)'
```

#### size & stroke

The size and stroke property is the text size and outline width, only use numbers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
