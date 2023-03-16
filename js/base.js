function backToIndex(level) {
    var outLevel = "";
    for (i = 0; i < level; i++) {
        outLevel = outLevel + "../";
    }
    location.href = outLevel + "index.html";
}


var java_url = [
    "/html/java/abstract_points.html",
    "/html/java/custome_thread_pool.html",
    "/html/java/analysis_video_cover.html",
    "www.baidu.com",
    "/html/java/log_viewer.html",
];
var python_url = [
    "/html/python/one_finger_auto_cheat.html"
];
var shell_url = [
    "/html/shell/online_shell.html",
    "/html/shell/file_transfer_expect.html"
];
var linux_url = [
    "/html/linux/nginx_config.html"
];
var to_me = [
    "/html/me.html",
]
var me_url = [
    "https://github.com/GitDatSanvich",
    "https://www.vultr.com/?ref=7321184"
];
var sql = [
    "/html/sql/awful_design_sql.html"
]
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
            location.href = linux_url[index];
            break;
        case "to_me":
            location.href = to_me[index];
            break;
        // me页面调用
        case "me":
            location.href = me_url[index];
            break;
        case "sql":
            location.href = sql[index];
            break;
        case "index":
            backToIndex(index);
            break;
    }
}

function imNotReadyYet() {
    alert("这部分内容还没准备好呢！");
}