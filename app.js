// Authentication 

function login() {

    const emailFiled = document.getElementById('email')
    const email = emailFiled.value;
    const passwordFiled = document.getElementById('password')
    const password = passwordFiled.value;
    if (email == 'example@example.com' && password == "password") {
        window.location.href = 'bank.html'

    }
    else {
        alert('please insert the current identity')
        emailFiled.value = ''
        passwordFiled.value = ''
    }
}


// calculate deposit 

function depositAmount() {
    const depositFiled = document.getElementById('deposit');
    const amount = depositFiled.value;
    const displyDeposit = document.getElementById('disply-deposit');
    const mainBlance = document.getElementById('blance');
    const blance = parseInt(mainBlance.innerText);
    

    if (amount >= 1) {
        displyDeposit.innerText = parseInt(amount) + parseInt(displyDeposit.innerText);
        mainBlance.innerText = blance + parseInt(amount)
        depositFiled.value = ''
    } else {
        
    }
}



// calculate withdrew 
function WithdrewAmount() {
    const withdrewFiled = document.getElementById('withdrew');
    const amount = parseInt(withdrewFiled.value);
    const mainBlance = document.getElementById('blance');

    const displyWithdrew =  document.getElementById('displyWithdrew');


    if (amount >= 1 ) {
        mainBlance.innerText = parseInt(mainBlance.innerText )- amount ;
        displyWithdrew.innerText = parseInt(displyWithdrew.innerText) + amount ;
        withdrewFiled.value = ''
    } else {
        console.log('false')
    }
  
}

