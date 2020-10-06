// Cartões de crédito válidos
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// Cartões de crédito inválidos
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Pode ser válido como inválido
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// Um array com todos os arrays acima
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Função para validar o cartão
let validateCred = cartao => {
    let j = cartao.length - 1;
    //console.log(j);
  
    // array para armazenar os novos valores
    let novoArr = [];
    let resultado = 0;
    if(j === 15) {
      // percorrer o cartão
      for(let i = j; i >= 0; i--) {
        //console.log(`${cartao[i]} de índice ${i}`);
  
        // condição para saber se a posição do array é igual a 15
        if(i === 15) {
          
          novoArr.push(cartao[i]);
          resultado += cartao[i];
  
        } else {
  
          if(i % 2 == 0) {
  
            // Par
            var dobro = cartao[i] * 2;
            if (dobro > 9) {
              dobro -= 9;
              novoArr.push(dobro);
              resultado += dobro;
            } else {
              novoArr.push(dobro);
              resultado += dobro;
            }
            
          } else {
  
            // Ímpar
            novoArr.push(cartao[i]);
            resultado += cartao[i];
  
          }
  
        }
        
      }
  
      /*console.log(`Novo Array: ${novoArr}`);
      console.log(`Soma: ${resultado}`);*/
      //console.log(`Resultado final: ${resultado%10}`);
      var resultadoF = resultado % 10;
  
      if(resultadoF == 0) {
        return true;
      } else {
        return false;
      }
  
    } else {
  
      if(j > 15) {
        return 'Este cartão possui mais de 16 dígitos!';
      } else if(j < 15) {
        return 'Este cartão possui menos de 16 dígitos!';
      } else {
        return 'Este cartão está possuído!';
      }
      
    }
    
  }
  
  // console.log(validateCred(valid1));
  
  let findInvalidCards = cartoes => {
    let fArray = [];
    for(let i = 0; i < cartoes.length; i++) {
      let resposta = validateCred(cartoes[i]);
      //console.log(`${resposta} ${'\n'}`);
  
      if(resposta === false) {
        fArray.push(cartoes[i]);
      }
    }
  
    return fArray;
  }
  
  // console.log(findInvalidCards(batch));
  
  let idInvalidCardCompanies = cartoes => {
  
    let companhiasArr = [];
  
    for(let i = 0; i < cartoes.length; i++) {
  
      // PD -> Primeiro Dígito do Cartão
      let PD = cartoes[i][0];
  
      if(PD === 3 || PD === 4 || PD === 5 || PD === 6) {
  
        switch(PD) {
          case 3:
            if(companhiasArr.indexOf("Amex (American Express)") === -1){
                companhiasArr.push("Amex (American Express)");
            } 
            break;
          case 4:
            if(companhiasArr.indexOf("Visa") === -1){
                companhiasArr.push("Visa");
            } 
            break;
          case 5:
            if(companhiasArr.indexOf("Mastercard") === -1){
                companhiasArr.push("Mastercard");
            } 
            break;
          case 6:
            if(companhiasArr.indexOf("Discover") === -1){
                companhiasArr.push("Discover");
            } 
            break;
          default:
            console.log('Companhia não encontrada');
        }// end switch
  
      }// end if 
  
    }// end for
  
    console.log(companhiasArr);
  
  }// end function
  
  let cartoesInvalidos = findInvalidCards(batch);
  idInvalidCardCompanies(cartoesInvalidos);







