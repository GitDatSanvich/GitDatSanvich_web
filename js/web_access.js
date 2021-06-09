function web_access(login_check) {
    var sender = axios.create({});
    sender.get(base_url + "/access").then(result => {
        console.log(result);
    });
}