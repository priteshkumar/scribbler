window.onload = function(){
    console.log('executing common.js');

    function formValidate(){
        var inputElements = document.getElementsByTagName('input');
        for(var index=0;index < inputElements.length;index++){
            var input = inputElements[index];
            input.addEventListener('input', function(e){
                this.setCustomValidity('');
                this.checkValidity();
            });
              
            input.addEventListener('invalid',function(e){
                console.log("empty field");
                console.log(this);
                if(this.value === '') {
                    console.log("0 len input");
                  this.setCustomValidity('Please fill out this field.');
                } 
            });
        }
    }

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

    $('#ModalSignIn').on("hidden.bs.modal",function(e){
        var signinForm = document.forms["signinform"];
        var usernameInput = signinForm.elements["InputUserNameSignIn"];
        usernameInput.value = usernameInput.defaultValue;
        var passwordInput = signinForm.elements["InputPasswordSignIn"];
        passwordInput.value = passwordInput.defaultValue;

    });

    var footlink = document.getElementById('footlink');
    footlink.addEventListener('click',function(e){
        $('#ModalSignUp').modal('toggle');
    });

    formValidate();
};