(function() {
    var pre = document.createElement('pre'),
        canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        _style = {
            color: '#000000',
            size: 16,
            font: 'Sans-serif'
        },
    preStyle = ';padding: 0; display: inline-block; position: fixed; top: 100%;';

    function setStyle(style) {
        for (var key in style) {
            this.style[key] = style[key];
        }
        this._style = '';
        this._style += 'color: ' + this.style.color + ';';
        this._style += 'font: ' + this.style.size + 'pt ' + this.style.font + ';';
        this._style += 'line-height: ' + this.style.size + 'pt;';
        this._style += preStyle;
        return this;
    }

    function toDataURL() {
        return canvas.toDataURL();
    }

    function toImage(message, callback) {
        convert.call(this, message);
        var img = new Image();
        if (callback) {
            img.onload = callback;
        }
        img.src = canvas.toDataURL();
        return img;
    }

    function convert(message) {
        message = message.trim();
        pre.innerHTML = message;
        pre.setAttribute('style', this._style);
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = pre.offsetWidth;
        canvas.height = pre.offsetHeight;
        context.font = pre.style.font;
        context.fillStyle = pre.style.color;
        var lines = message.split('\n');
        if (lines.length == 1) {
            context.fillText(message, 0, canvas.height - 3);
        } else {
            var lineHeight = pre.offsetHeight / lines.length;
            lines.forEach(function(line, i) {
                context.fillText(line, 0, (lineHeight * (i + 1)) - 3);
            });
        }
    }

    if (window.addEventListener) {
        window.addEventListener('load', onload, false)
    } else {
        window.attachEvent('onload', onload, false)
    }

    function onload() {
        document.body.appendChild(pre);
    };

    window.TextImage = function(style) {
        var n = {
            style: _style,
            setStyle: setStyle,
            toDataURL: toDataURL,
            toImage: toImage
        };
        n.setStyle(style);
        return n;
    }
})();