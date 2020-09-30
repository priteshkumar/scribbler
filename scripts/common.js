window.onload = function(){
    console.log('executing common.js');
    $('#ModalSignUp').on("hidden.bs.modal",function(e){
        //e.preventDefault();
        console.log('setting default form input values');
        var signupForm = document.forms["signupform"];
        var nameInput = signupForm.elements['InputName'];
        nameInput.value = nameInput.defaultValue;
        var usernameInput = signupForm.elements['InputUserName'];
        usernameInput.value = usernameInput.defaultValue;
        var passwordInput = signupForm.elements['InputPassword'];
        passwordInput.value = passwordInput.defaultValue;
        var passwordConfirmInput = signupForm.elements['InputConfirmPassword'];
        passwordConfirmInput.value = passwordConfirmInput.defaultValue;
    });
};