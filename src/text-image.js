(function() {
    var pre = document.createElement('pre'),
        canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        _style = {
            font: 'Sans-serif',
            align: 'left',
            color: 'rgba(0, 0, 0, 1)',
            size: 16
        },
        preStyle = ';padding: 0; display: inline-block; position: fixed; top: 100%;';

    function setStyle(style) {
        for (var key in style) {
            this.style[key] = style[key];
        }
        this._style = 'font: ' + this.style.size + 'pt ' + this.style.font + ';';
        this._style += 'line-height: ' + this.style.size + 'pt;';
        this._style += 'text-align: ' + this.style.align + ';';
        this._style += 'color: ' + this.style.color + ';';
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
        context.textAlign = pre.style.textAlign;
        context.fillStyle = pre.style.color;
        var x = 0;
        switch (context.textAlign) {
            case 'center':
                x = canvas.width / 2;
                break;
            case 'right':
                x = canvas.width;
                break;
        }
        var lines = message.split('\n');
        if (lines.length == 1) {
            context.fillText(message, x, canvas.height - 3);
        } else {
            var lineHeight = pre.offsetHeight / lines.length;
            lines.forEach(function(line, i) {
                context.fillText(line, x, (lineHeight * (i + 1)) - 3);
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
            style: {},
            setStyle: setStyle,
            toDataURL: toDataURL,
            toImage: toImage
        };
        for (var key in _style) {
            n.style[key] = _style[key];
        }
        n.setStyle(style);
        return n;
    }
})();