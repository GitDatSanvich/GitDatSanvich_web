function web_access(login_check, level) {
    var sender = axios.create({});
    sender.get(base_url + "/access").then(result => {
        console.log(result);
        if (result.data.code === 0) {
            if (!result.data.data.accessAble) {
                to_error(level);
            }
            var time = result.data.data.accessTime;
            var ip = result.data.data.ip;
            var access_total = result.data.data.totalAccessTime;
            document.getElementById("access_time").innerHTML = time;
            document.getElementById("access_id").innerHTML = ip;
            document.getElementById("access_time_total").innerHTML = access_total;
        } else {
            //失败直接跳转 error
            to_error(level);
        }
    });
}

function to_error(level){
    var outLevel = "";
    for (i = 0; i < level; i++) {
        outLevel = outLevel + "../";
    }
    location.href = outLevel + "error.html";
}