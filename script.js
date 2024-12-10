const input = document.querySelector('#input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#Generate');

let generated = '';
let generatedLength;

numbers = ['0','1','2','3','4','5','6','7','8','9'];
smallAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
capAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
symbol = ['.','@',' ','-','!','"','#','$','%','&','(',')','*','+','/'];

function generatePassword(){

    generatedLength = Math.floor(Math.random() * (15 - 13 + 1)) + 13;

    for(i=0; i< generatedLength; i++){
        let typePick = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        
        if (typePick === 1){
            generated += numbers[Math.floor(Math.random() * (9 - 0 + 1))];
        }
        else if (typePick === 2){
            generated += smallAlpha[Math.floor(Math.random() * (25 - 0 + 1))];
        }
        else if (typePick === 3){
            generated += capAlpha[Math.floor(Math.random() * (25 - 0 + 1))];
        }
        else if (typePick === 4){
            generated += symbol[Math.floor(Math.random() * (14 - 0 + 1))];
        }
    }
    input.value = generated;
    generated = '';
}

function copyContent(){
    input.select();
    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);
}

generate.addEventListener('click', () =>{
    generatePassword();
})

copy.addEventListener('click', () => {
    copyContent();
})