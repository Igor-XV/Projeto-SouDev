let turma = [
    'alexandre',
    'Erika',
    'Davi',
    'igor',

];

turma.push ('alicia')
turma[5] = 'italo'
turma.push ('talyson')
turma[3] = 'elias'; 
turma[6] += 'sales';

let quantidade = turma.length;

for (let n = 0; n < turma.length; n++) {
    document.write(`${turma[n]} <br>`);
}

