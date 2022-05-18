function cumprimentar(){
   console.log("Olá, usuário");
}

function cumprimentar2(msg = 'oi'){
    console.log(msg);
}

criarParagrafo('A vida não é aleatória por acaso!')
function criarParagrafo(txt){
    //document.write(`<p>${txt}</p>`);
}

function criarElementoHTML(txt, elemento = 'p'){
    //document.write(`<${elemento}>${txt}</${elemento}>`);
}

criarElementoHTML('Olá mundo', 'h1');


function imc(peso, altura){
    return parseFloat((peso / (altura**altura)).toFixed(2));
}

 console.log(imc(75, 1.7))

 let sub = function(a, b){
    if(b > a ){
        return b - a;
    } else {
        return a - b;
    }
 }

 console.log(sub(4, 6));

 let arrow = (a, b) => {
    if(b > a ){
        return b - a;
    } else {
        return a - b;
    }
 }

 console.log(arrow(10, 5))

 let somar = (a, b) => a + b;
 console.log(somar(5, 5))