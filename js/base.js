function backToIndex(level) {
    var outLevel = "";
    for (i = 0; i < level; i++) {
        outLevel = outLevel + "../";
    }
    location.href = outLevel + "index.html";
}


var java_url = [
    "/html/java/abstract_points.html",
    "www.baidu.com",
    "www.baidu.com",
    "www.baidu.com",
    "www.baidu.com",
];
var python_url = [
    "/html/python/one_finger_auto_cheat.html",
    "www.baidu.com",
    "www.baidu.com",
    "www.baidu.com",
    "www.baidu.com",
];
var shell_url = [

];
var liunx_url = [
    ""
];
var to_me = [
    "/html/me.html"
]
var me_url = [
    "https://github.com/GitDatSanvich"
];
function jump(index, type) {
    switch (type) {
        // index 调用
        case "java":
            location.href = java_url[index];
            break;
        case "python":
            location.href = python_url[index];
            break;
        case "shell":
            location.href = shell_url[index];
            break;
        case "linux":
            location.href = liunx_url[index];
            break;
        case "to_me":
            location.href = to_me[index];
            break;
        // me页面调用
        case "me":
            location.href = me_url[index];
            break;
        case "index":
            backToIndex(index);
            break;
    }
}