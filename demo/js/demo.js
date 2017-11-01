var demo_text = `Change this text create your image.
You can use:
0 1 2 3 4 5 6 7 8 9
~ ! @ # $ % ^ & * ( ) _ +
English, 中文,
Aбаза бызшва, Alnôba, Wôbanakiôdwawôgan ᠮᠣᠨᠭᠭᠣᠯ ᠬᠡᠯᠡ
\uf132`,
    codeTemplate = `var message = %MESSAGE%;
var style = %STYLE%;
var textImage = TextImage(style);
document.querySelector("your selector").innerHTML = textImage.toImage(message);
`,
    textImage,
    textarea,
    gridLine,
    fontSize, fontColor, fontFamily,
    imageDisplay, imageDownload,
    codeExample;

function init() {
    textImage = TextImage();
    textarea = document.querySelector('textarea');
    gridLine = document.querySelector('input[name="grid-line"]');
    fontSize = document.querySelector('select[name="font-size"]');
    fontColor = document.querySelector('select[name="font-color"]');
    fontFamily = document.querySelector('select[name="font-family"]');
    imageDisplay = document.querySelector('.image-display');
    imageDownload = document.querySelector('.image-download');
    codeExample = document.querySelector('.code-example');
    textarea.addEventListener('keyup', updateImage, false);
    gridLine.addEventListener('change', showGridLine, false);
    fontSize.addEventListener('change', updateImage, false);
    fontColor.addEventListener('change', updateImage, false);
    fontFamily.addEventListener('change', updateImage, false);
    textarea.value = demo_text;
    // showGridLine.call(gridLine);
    updateImage();
}

function getStyle() {
    var style = {
        font: fontFamily.value,
        size: fontSize.value,
        color: fontColor.value
    };
    textImage.setStyle(style);
}

function updateImage() {
    var style = {
            font: fontFamily.value,
            size: parseInt(fontSize.value),
            color: fontColor.value
        },
        message = textarea.value.trim();
    if (!message) {
        codeExample.innerHTML = imageDisplay.innerHTML = '';
        codeExample.style.display = 'none';
        return;
    }
    textImage.setStyle(style);
    textarea.setAttribute('style',
        'color: ' + textImage.style.color + ';' +
        'font: ' + textImage.style.size + 'pt ' + textImage.style.font + ';' +
        'line-height: ' + textImage.style.size + 'pt;')
    textImage.toImage(message, function() {
        if (gridLine.checked) {
            this.style.backgroundImage = textarea.style.backgroundImage = 'url(demo/img/grid-line.png)';
        } else {
            this.style.backgroundImage = textarea.style.backgroundImage = 'none';
        }
        this.style.backgroundImage = textarea.style.backgroundImage;
        imageDisplay.innerHTML = this.outerHTML;
        imageDownload.href = this.src;
        imageDisplay.appendChild(imageDownload);
    });
    var template = codeTemplate.replace('%MESSAGE%', JSON.stringify(textarea.value, null, 4));
    codeExample.innerHTML = template.replace('%STYLE%', JSON.stringify(textImage.style, null, 4));
    codeExample.style.display = 'block';
}

function showGridLine() {
    var img = imageDisplay.querySelector('img');
    if (!img) {
        img = new Image();
    }
    console.log(this.checked);
    if (this.checked) {
        img.style.backgroundImage = textarea.style.backgroundImage = 'url(demo/img/grid-line.png)';
    } else {
        img.style.backgroundImage = textarea.style.backgroundImage = 'none';
    }
    console.log(img.style.backgroundImage);
}

window.addEventListener('load', init, false);