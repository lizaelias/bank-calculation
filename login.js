document.getElementById('submit-btn').addEventListener('click', function () {
    // step 2
        const emailFiled = document.getElementById('user-email');
        const email = emailFiled.value;
    //step 3
    const passWordFiled = document.getElementById('user-password');
    const password = passWordFiled.value;

    if (email === 'elias221624@gmail.com' && password === '12345678') {
      
        window.location.href = 'another.html';
    } else if( email === 'liza@gmail.com' && password === '12345678'){
        
    }
    
    
    else {
        alert('Please enter your correct password');
    }


})