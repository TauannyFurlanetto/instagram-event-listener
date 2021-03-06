window.addEventListener("load", ()=>{
    const formButton = document.querySelector(".form-auth.card button");
    const inputEmail = document.getElementsByName("email");
    const inputName = document.getElementsByName("name");
    const inputSurname = document.getElementsByName("surname");
    const inputUsername = document.getElementsByName("username");
    const inputPassword = document.getElementsByName("password");

    // INSERINDO O DATE
    let form = document.querySelector(".form-auth.card");
    let inputDate = document.createElement("input");
    inputDate.name = "data-nascimento";
    inputDate.placeholder = 'Insira sua data de nascimento';
    inputDate.type = "date";
    form.insertBefore(inputDate, formButton);

    // PRIMEIRA CAMADA DE VALIDACAO
    inputDate.required = "true";
    inputEmail[0].required = "true";
    inputName[0].required = "true";
    inputSurname[0].required = "true";
    inputUsername[0].required = "true";
    inputPassword[0].required = "true";

    // SEGUNDA CAMADA DE VALIDACAO

    // Mensagens de erro
    let errorArray = [
        "O email deve ter '.', '@' e entre 6 e 180 caracteres",
        "O nome deve ter entre 2 e 80 caracteres",
        "O sobrenome deve ter entre 2 e 100 caracteres",
        "O nome de usuario deve ter entre 10 e 15 caracteres",
        "A senha deve ter entre 8 e 100 caracteres",
        "Voce precisa ter entre 16 e 120 anos"
    ]
    
    // Clique no botao
    formButton.addEventListener("click", (event)=>{
        event.preventDefault();
        // Armazena os valores de cada campo, se estao preenchidos corretamente ou nao
        var valArr = [0,0,0,0,0,0];

        // Verirfica se os campos estao obedecendo certos criterios
        // Adciona uma mensagem em baixo do campo se nao
        // Da submit no form caso tudo esteja correto

        // Verifica se o campo email contem o valor @
        if(!inputEmail[0].value.includes("@") || !inputEmail[0].value.includes(".") 
        || inputEmail[0].value.length>180 || inputEmail[0].value.length<10){
            // Cria o paragrafo caso ja nao haja um erro em baixo
            if (inputEmail[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[0];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputName[0]);
                // Informa que o primeiro campo esta errado
                valArr[0] = 0;
            }
        // Remove o paragrafo caso haja uma mensagem de erro e o campo esteja certo  
        }else if (inputEmail[0].nextElementSibling.nodeName == "P"){
            inputEmail[0].nextElementSibling.remove();
            // Define o resultado como correto
            valArr[0] = 1;
        }else{
            // Define o resultado como correto caso o primeiro preenchimento for valido
            valArr[0] = 1;
        }
        if(inputName[0].value.length<2 || inputName[0].value.length>80){
            if (inputName[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[1];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputSurname[0]);
                valArr[1] = 0;
            }
            
        }else if(inputName[0].nextElementSibling.nodeName == "P"){
            inputName[0].nextElementSibling.remove();
            valArr[1] = 1;
        }else{
            valArr[1] = 1;
        }
        if(inputSurname[0].value.length<2 || inputSurname[0].value.length>100){
            if (inputSurname[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[2];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputUsername[0]);
                valArr[2] = 0;
            }
            
        }else if(inputSurname[0].nextElementSibling.nodeName=="P"){
            inputSurname[0].nextElementSibling.remove();
            valArr[2] = 1;
        }else{
            valArr[2] = 1;
        }
        if(inputUsername[0].value.length<10 || inputUsername[0].value.length>15){
            if (inputUsername[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[3];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputPassword[0]);
                valArr[3] = 0;
            }
            
        }else if (inputUsername[0].nextElementSibling.nodeName == "P"){
            inputUsername[0].nextElementSibling.remove();
            valArr[3] = 1;
        }else{
            valArr[3] = 1;
        }
        if(inputPassword[0].value.length<8 || inputPassword[0].value.length>100){
            if (inputPassword[0].nextElementSibling.nodeName == "INPUT"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[4];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,inputDate);
                valArr[4] = 0;
            }
            
        }else if (inputPassword[0].nextElementSibling.nodeName =="P"){
            inputPassword[0].nextElementSibling.remove();
            valArr[4] = 1;
        }else{
            valArr[4] = 1;
        }
        
        if (parseInt(inputDate.value.split("-")[0])>2005 || parseInt(inputDate.value.split("-")[0])<1901 || inputDate.value==[""]){
            if (inputDate.nextElementSibling.nodeName == "BUTTON"){
                let pError = document.createElement("p");
                pError.innerText = errorArray[5];
                pError.style.fontSize = "0.7rem";
                pError.style.textAlign = "left";
                form.insertBefore(pError,formButton);
                valArr[5] = 0;
            }
            
        } else if(inputDate.nextElementSibling.nodeName=="P"){
            inputDate.nextElementSibling.remove();
            valArr[5] = 1;
        }else{
            valArr[5] = 1;
        }
        if (!valArr.includes(0)){
            form.submit();
        } 
     })
})