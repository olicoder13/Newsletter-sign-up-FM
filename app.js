document.getElementById('btn').addEventListener('click', envio)
const input = document.querySelector('#email');
const mensaje = document.querySelector('#message');
const contenedor = document.querySelector('.container')
const contendorEnvio = document.querySelector('.success-container');
const correo = document.querySelector('#correo');

function envio(e){
    e.preventDefault()
   if(input.value.includes('@') && input.value.includes('company')){
    contenedor.style.display = 'none';
    correo.textContent = input.value;
    contendorEnvio.style.display = 'initial';
   }else{
    mensaje.style.display = 'initial';
    input.style.backgroundColor = 'rgb(255, 160, 122)';
    input.style.opacity = .5;
    input.style.color = 'red'
    input.style.border = 'darkorange'
   }
}

