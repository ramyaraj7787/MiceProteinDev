function loginReqCheck(){
    var email = document.getElementById('Email');
    var pass = document.getElementById('Password');
    if(email==""){
        alert("Fill Email");
        return false;
    }
    else if(pass==""){
        alert("Fill Password");
        return false;
    }
    else {
        //return  $('#logindata').attr('action', '/home');
    }
}

$(document).ready(function() {
    $("#login").on('click', function() {
        if(#Email.val==""){
            alert("Fill Email");
            return false;
        }
        else if(#Password.val==""){
            alert("Fill Password");
            return false;
        }
        else {
            //return  $('#logindata').attr('action', '/home');
        }        
    });
});

function regReqCheck(){
    var fname = document.getElementById('firstName');
    var lname = document.getElementById('lastName');
    var email = document.getElementById('Email');
    var pass = document.getElementById('Password');
    var repass = document.getElementById('repeatPassword');
    var role = document.getElementById('role')
    if(fname==""){
        alert("Fill First Name");
        return false;
    }
    else if(lname==""){
        alert("Fill Last Name");
        return false;
    }
    else if(role=="Select"){
        alert("Please select a ROle");
        return false;
    }
    else if(email==""){
        alert("Fill Email");
        return false;
    }
    else if(pass==""){
        alert("Fill Password");
        return false;
    }
    else if(repass==""){
        alert("Retype Password");
        return false;
    }
    else if(pass!=repass){
        alert("Retype password wrong!");
        return false;
    }
    else {
        //return  $('#logindata').attr('action', '/home');
    }
}
