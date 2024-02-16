function randomName(){
    let change = document.querySelector('#name');
    change.innerText = 'Julieta Venegas';
}

function removeContact(i){
    let eliminar = document.querySelector(".contact" + i);
    eliminar.remove();
}