window.addEventListener("load", ()=>{
    const formButton = document.querySelector(".form-auth.card button");
    const inputEmail = document.getElementsByName("email");
    const inputName = document.getElementsByName("name");
    const inputSurname = document.getElementsByName("surname");
    const inputUsername = document.getElementsByName("username");
    const inputPassword = document.getElementsByName("password");

    // Inserindo o input date
    let form = document.querySelector(".form-auth.card");
    let inputDate = document.createElement("input");
    inputDate.name = "data-nascimento";
    inputDate.placeholder = 'Insira sua data de nascimento';
    inputDate.type = "date";
    form.insertBefore(inputDate, formButton);
    // Primeira camada de validacao
    inputDate.required = "true";
    inputEmail[0].required = "true";
    inputName[0].required = "true";
    inputSurname[0].required = "true";
    inputUsername[0].required = "true";
    inputPassword[0].required = "true";

    // Segunda camada de validacao
    let errorArray = [
        "O campo de email é invalido, preencha de novo",
        "O nome está muito curto, precisa ser maior ou igual que três caracteres",
        "O campo de sobrenome esta muito curto, preencha de novo",
        "Nome de usuario muito pequeno, deve ser maior que 6 caracteres",
        "A senha deve ter no minimo 8 caracteres",
        "Insira um ano menor que 2100 e maior que 1900"
    ]
    console.log(inputDate.value);
    let submit = false;
    formButton.addEventListener("click", (event)=>{
        event.preventDefault();
        if (submit == false){

        }else{
            form.submit();
        }
        if(!inputEmail[0].value.includes("@")){
            let pError = document.createElement("p");
            if (inputEmail[0].nextElementSibling.nodeName == "INPUT"){
                pError.innerText = errorArray[0];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";

                form.insertBefore(pError,inputName[0]);
            }
        }else if (inputEmail[0].nextElementSibling.nodeName == "P"){
            inputEmail[0].nextElementSibling.remove();
        }
        if(inputName[0].value.length<2){
            if (inputName[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[1];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputSurname[0]);
            }
            
        }else if(inputName[0].nextElementSibling.nodeName == "P"){
            inputName[0].nextElementSibling.remove();
        }
        if(inputSurname[0].value.length<3){
            if (inputSurname[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[2];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputUsername[0]);
            }
            
        }else if(inputSurname[0].nextElementSibling.nodeName=="P"){
            inputSurname[0].nextElementSibling.remove();
        }
        if(inputUsername[0].value.length<5){
            if (inputUsername[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[3];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputPassword[0]);
            }
            
        }else if (inputUsername[0].nextElementSibling.nodeName == "P"){
            inputUsername[0].nextElementSibling.remove();
        }
        if(inputPassword[0].value.length<7){
            if (inputPassword[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[4];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputDate);
            }
            
        }else if (inputPassword[0].nextElementSibling.nodeName =="P"){
            inputPassword[0].nextElementSibling.remove();
        }
        console.log(parseInt(inputDate.value.split("-")[0]));
        if (1900>parseInt(inputDate.value.split("-")[0])>2100 || inputDate.value == ""){
            if (inputDate.nextElementSibling.nodeName == "BUTTON"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[5];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,formButton);
            }
            
        } else if(inputDate.nextElementSibling.nodeName=="P"){
            inputDate.nextElementSibling.remove();
        }else {
            form.submit();
        }   
     })
})