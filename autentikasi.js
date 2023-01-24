function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");
    
    if(inp_nama == "admin" && inp_pass == "123456"){
        form.setAttribute("action","siloker_backend1.html");
        alert("Login Berhasil");
    }else{
        alert("Login Gagal");
    }
}