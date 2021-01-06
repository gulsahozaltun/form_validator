const form= document.getElementById("form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone= document.getElementById('phone');

function checkRequired(inputs) {
    inputs.forEach(function(input){

    
    if(input.value === ''){
        error(input,`${input.id} is required!`);

    }

    else{
        success(input);
   
}});  }
    
function error (input, message){
    input.className = 'form-control is-invalid';
    const div =  input.nextElementSibling;
    div.innerText =message;
    div.className ='invalid-fed-back';
}
function  success (input){
    input.className = 'form-control is-valid';
}

//email format kontrol
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        succes(input);
    }
        else{
            error(input,'wrong format');
        }
    }
function checkLength(input,min,max){
    if (input.value.length< min){
        error(input, `${input.id} length must be minimum ${min} length `);
    }
    else if(input.value.length> max) {
        error(input, `${input.id} length must be maximum ${max} length `);

    }
    else{
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2){
        error(input2, 'Passwords doesnt match')
    }
}

function checkPhone(input){
 var exp = /^\d{10}$/;
 if (!exp.test(input.value))
 error(input, 'Phone number must be numeric');
}

form.addEventListener('submit',function(e) {
    e.preventDefault();  
    checkRequired  ([username,email,phone,password,repassword]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});