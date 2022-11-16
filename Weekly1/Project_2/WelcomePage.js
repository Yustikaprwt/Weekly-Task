function alert() {
    const FirstName = document.getElementById('inputName');
    const LastName = document.getElementById('inputLastName');
    const Email = document.getElementById('inputEmail');
    const Message = document.getElementById('inputText');

    const success = document.getElementById('Success');
    const danger = document.getElementById('danger');

    if(FirstName.value === '' || LastName.value === '' || Email.value === '' || Message.value === '') {
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            FirstName.value = '';
            LastName.value = '';
            Email.value = '';
            Message.value = '';
        }, 2000);
        
        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000)
}