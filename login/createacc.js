function regist() {
    let inp_nimi = document.getElementById("fullname").value;
    let inp_name = document.getElementById("username").value;
    let inp_sandi = document.getElementById("sandi").value;
    let inp_sandi2 = document.getElementById("sandi2").value;
    let form = document.getElementById("form");
    
    if(inp_nimi == "" && inp_name == "" && inp_sandi == "" && inp_sandi2 == ""){
        form.setAttribute("action","login.html");
        alert("Akun Berhasil Dibuat");
    }else{
        alert("Mohon buat akun dengan benar");
    }
}