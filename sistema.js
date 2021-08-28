let numeroDeAlunos = 10;

for (let contador = 1; contador <= numeroDeAlunos; contador++) {

   if (contador === 0) {
       console.log("O numero atual e ZERO");
   } else if (contador % 2 == 0 && contador > 5) {
      console.log("O numero " + contador + " e PAR e maior que 5")
   } else if (contador % 2 == 0) {
       console.log("O numero " + contador + " e IMPAR")
    }  else {
        console.log("O numero " + contador + " e IMPAR")
   }  
}

let usuario;

if (!usuario) {
    console.log("A resposta esta vazia")
}


/*

AND (e)
true  && true -> true
true && false -> false
false && true -> false
false && false -> false

OR (OU)
true || true -> true
true || false -> true
false || true -> true
false || false -> false

NOT (NÃO)
!true -> false
!false -> true

/*

// let contador = 1;

// do {

//     if(contador === 0){
//             console.log("O numero atual e ZERO")
//         } else if (contador % 2 != 0){
//             console.log("O numero " + contador + " é IMPAR")
//         } else {
//             console.log("O numero " + contador + " é PAR")
//         }    
        
//         contador++;
    
// } while (contador <= numeroDeAlunos);

// while (contador <= numeroDeAlunos) {
//      if(contador === 0){
//         console.log("O numero atual e ZERO")
//     } else if (contador % 2 != 0){
//         console.log("O numero " + contador + " é IMPAR")
//     } else {
//         console.log("O numero " + contador + " é PAR")
//     }    
    
//     contador++;
// }

// let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley","Adriano"]

// for (const aluno of listaDeAlunos) {
//     console.log(aluno);
// }

// listaDeAlunos.forEach(aluno => {
//     console.log(aluno)
// });