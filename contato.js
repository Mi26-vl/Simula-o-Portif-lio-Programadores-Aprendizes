const formulario = document.querySelector('form')

formulario.addEventListener ("submit", function(event) {
    event.preventDefault(); 
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let assunto = formulario.assunto.value;
    let mensagem = formulario.mensagem.value;

    console.log(nome, email, assunto, mensagem)
    alert(`O nome é ${nome}, o seu email é ${email}, o assunto é ${assunto}, e deixou uma mensagem dizendo, ${mensagem}`)

})
 