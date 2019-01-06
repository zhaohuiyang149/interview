const fs = require ('fs')

fs.readFile('promise.html', function(err, data) {
    var page = new Promise (function (resolve, reject) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
    page.then(function(data) {
        console.log(data)
    }, function (err) {
        console.log(err)
    })
})