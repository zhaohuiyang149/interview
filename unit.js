util.json = function (options) {
    var opt = {
        url: '',
        type: 'get',
        data: {},
        success: function () {},
        error: function () {}
    }
    util.extend(opt, options);
    if (opt.url) {
        var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');
        data = opt.data
        url = opt.url
        type = opt.type.toUpperCase()
        dataArr = []
         for (var k in data) {
            dataArr.push(k + '=' + data[k])
        }
        if (type === 'get') {
            url = url + '?' + dataArr.join('&')
            xhr.open(type, url.replace(/\?&/g, ''), true)
            xhr.send()
        }
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 304) {
                var res
                if (opt.success && opt.success instanceof Function) {
                    
                }
            }
        }
    }
}