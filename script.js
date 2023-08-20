const options = document.getElementById('options');
const input = document.getElementById('input-slot');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');

checkBtn.addEventListener('click',checkValidity);

function checkValidity(){
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneNoPattern = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
    const postCodePattern = /^\d{4}$/;
    
    let pattern;

    switch(options.value){
        case 'Email':
            pattern = emailPattern;
            break;
        case 'Phone Number':
            pattern = phoneNoPattern;
            break;
        case 'Post Code':
            pattern = postCodePattern;
            break;
    }

    if(pattern.test(input.value)){
        message.innerHTML = `Valid ${options.value}`;
    }
    else {
        message.innerHTML = `Invalid ${options.value}`;
    }
}