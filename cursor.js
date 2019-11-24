window.addEventListener("mousemove", function(e) {
    [1,.9,.8,.5,.1].forEach(function(i) {
        var j = (1- i)*50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.height = size;
        elem.style.zIndex = 1;
        elem.style.background = 'hsla('  + '1, ' +
        '100%, ' +
        '100%, ' +
        i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        window.setTimeout(function() {
        document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 300));
    })
})