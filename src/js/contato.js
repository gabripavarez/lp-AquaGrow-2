const form = document.getElementById ("form")
const nome = document.getElementById ("nome")
const email = document.getElementById ("email")
const mensagem =document.getElementById ("mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputNome();
    checkInputEmail();
})

function checkInputNome(){
    const nameValue = nome.value;

    if(nameValue === ""){
        errorInput(nome, "Preencha com um nome!")
    }

    else{
        const formItem = nome.parentElement;
        formItem.className = "campo-form"
    }

}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText  = message;

    formItem.className = "campo-form error"
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputEmail();
})

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório!")
    }

    else{
        const formItem = email.parentElement;
        formItem.classEmail = "campo-form"
    }

}
