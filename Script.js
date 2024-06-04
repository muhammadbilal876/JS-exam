

let users = [];

let emailFormat = /^([a-zA-z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-z0-9]{2,4})+$/;

function signUp() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === emailFormat) {
        showNotification('Please enter your email.');
        return;
    }
    if (password.length < 3) {
        showNotification('Please enter your password.');
        return;
    }
    users.push({ email: email, password: password });
    showNotification('User signup successful!');

    // document.getElementById("nameField").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    title.innerHTML = 'Sign In';
    document.getElementById("title").innerHTML = "Sign In"
    document.getElementById("pass").innerHTML = ""
    document.getElementById("input-group").style.display = 'block'
}

function signIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email || !password) {
        showNotification('Please fill all fields.');
        return;
    }

    let user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        showNotification('Invalid username or password!');
        return;
    }

    showNotification('User login successful!');
    document.getElementById("demo").style.display = 'block'
    document.getElementById("input-group").style.display = 'none'
}


function showNotification(msg, type){

    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
            case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            bgColor = "#000"
            break;
    }
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}