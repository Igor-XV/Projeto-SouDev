
let dia = 1; //inicio
while (dia <= 31) { //fim//condição

    selectdia.innerHTML += `<option>${dia}</option>`;

    dia++; //incremento//passo

}

// let mes = 1;
// while (mes <=12) {
//     selectmes.innerHTML += `<option>${mes}</option>`;
    
//     mes++;
// }

let ano = 2022; 
while (ano >=1900) {
    selectano.innerHTML += `<option>${ano}</option>`

    ano--;
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
    
];
// meses.forEach(function (cadames) {
//     selectmes.innerHTML += `<option>${cadames}</option>`;
// });

meses.forEach( function (nomeDoMes) {
    selectmes.innerHTML += `<option>${nomeDoMes}</option>`;

});

