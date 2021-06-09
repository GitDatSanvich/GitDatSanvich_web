function web_access(login_check) {
    var sender = axios.create({});
    sender.get(base_url + "/access").then(result => {
        if(result.data.code===0){
            if(!result.data.data.accessAble){
                location.href="error.html";
            }
            var time = result.data.data.accessTime;
            document.getElementById("access_time").innerHTML = time;
        }else{
            //失败直接跳转 error
            location.href="error.html";
        }
    });
}