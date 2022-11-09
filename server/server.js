var liveServer = require("live-server");
 
var params = {
    port: 8080, 
    host: "0.0.0.0",
    root: "../",
    open: false,
    ignore: 'scss,my/templates',
    file: "index.html",
    wait: 1000
};
liveServer.start(params);