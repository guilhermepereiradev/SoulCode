function triangulo(){
    const ladoA = document.getElementById("a"); 
    const ladoB = document.getElementById("b");
    const ladoC = document.getElementById("c");
    const div = document.getElementById("div");

    const a = ladoA.value;
    const b = ladoB.value;
    const c = ladoC.value;

    if (a == b && b == c){
        console.log("Equilátero");
        div.innerHTML = '<img src="equilatero.png" alt="triangulo equilátero"></img>';
    } else if (a == b || b == c || c == a ){
        div.innerHTML = '<img src="isosceles.png" alt="triangulo equilátero"></img>';
    } else {
        div.innerHTML = '<img src="escaleno.png" alt="triangulo equilátero"></img>';
    }
}
