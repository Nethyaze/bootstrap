const sendform = document.querySelector('#envia')


const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const text = document.querySelector('#texto')


sendform.addEventListener('click',function(evento){
    evento.preventDefault();
    if (nome.value== undefined||
        nome.value== null||
        nome.value.trim()== ""||
        nome.value.length<0){
        nome.focus();
        alert("Preencha o campo nome corretamente")
        return false;
   
    }else if (email.value== undefined ||
              email.value== null||
              email.value.trim()== ""||
              email.value.length<0){
              email.focus();
        alert("Preencha o campo email corretamente")
        return false;
     }
        


    else if (tel.value== undefined||
      tel.value== null||
      tel.value.trim()== ""||
      tel.value.length<11){
      tel.focus();
      alert("Preencha o campo de telefone corretamente.")
      return false;

    }else if (text.value== undefined||
        text.value== null||
        text.value.trim()== ""||
        text.value.length<10){
        text.focus();
  alert("Preencha o campo de texto corretamente.")
  return false;

}
document.querySelector('form').submit()
alert('Cadastro realizado com sucesso!')
})