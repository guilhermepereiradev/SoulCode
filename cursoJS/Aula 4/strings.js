let str = "Olá eu sou\n uma string";
let str1 = `String delimitada 
por crase`
let str2 = "E ele me disse: \"Que linguagem é essa?\"";

let string = 'Olá mundo!'

console.log(string.length);
console.log(string[--string.length]); //ultimo caractere da string

const str3 = 'O homem é o próprio lobo do homem';
console.log(str3.indexOf('homem')); // index da palavra primeira palavra homem;
console.log(str3.charAt(5)); // caractere presente no index 5;
console.log(str3.charCodeAt(5)); // retorna o código do caractere;
console.log(str3.split(' , '));
console.log(str3.concat(' sim pq eu quero'));
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.replace('homem' ,'pessoa'));
console.log(str3.replaceAll('homem', 'pessoa'));
console.log(str3.replace(/homem/gi, 'pessoa'));
console.log(str3.startsWith('O homem')); // true
console.log(str3.endsWith('Homem')) // false
console.log(str3.slice(5));
console.log(str3.slice(12 , 24));
console.log(str3.slice(-21));