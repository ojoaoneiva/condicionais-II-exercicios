// Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 ou por 3.

// Faça isso:

// a) Utilizando ifs aninhados

const numero = Number(prompt("Digite um número"))

if(numero%2===0){
    if(numero%3===0){
        console.log("O número é divisível por 2 ou por 3")
    }
    else {
        console.log("O número é divisivél por 2")
    }
}
else if(numero%3===0){
    console.log("O número é divisel por 3")
}
else {
    console.log("O número NÃO é divisel por 2 ou por 3")
}


// Utilizando um operador lógico para unir duas operações relacionais

// OU


if(numero%2===0 || numero%3===0){
    console.log("O número é divisível por 2 ou por 3")
}
else{
    console.log("O número NÃO é divisel por 2 ou por 3")
}

// E

if(numero%2===0 && numero%3===0){
    console.log("O número é divisível por 2 e por 3")
}
else{
    console.log("O número NÃO é divisel por 2 e por 3")
}