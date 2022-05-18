function equacaoSegundoGrau(a, b, c){
    let delta = (b**2) - (4*a*c);
    let raizDelta = Math.sqrt(delta)
    let x1 = (-b + raizDelta) / 2*a;
    let x2 = (-b - raizDelta) / 2*a;

    // return [x1, x2]
    return {
        x1,
        x2
    }
}

console.log(equacaoSegundoGrau(1, -1, -12));
