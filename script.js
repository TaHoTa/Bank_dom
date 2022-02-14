document.getElementById('submit').addEventListener('click', function () {
    // get email -----------
    const emailField = document.getElementById('email');
    const emailId = emailField.value;
    console.log(emailId);

    // get password -----------
    const passField = document.getElementById('pass');
    const password = passField.value;
    console.log(password);

    // validation ----------
    if (emailId == 'taz@gmail.com' && password == '12345') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid login info');

    }
})
