function calculadora(){
    const operacao = Number(prompt('Escolha uma opção: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'))


    //VALIDAÇÃO
    if (!operacao || operacao > 6){
        alert('Erro - Entrada invalida.');
        calculadora();
    }else {
        let n1 = Number(prompt('Informe o primeiro número:'));
        if (!n1 ){
            alert('Erro - Entrada invalida.');
            calculadora();
        }
        let n2 = Number(prompt('Informe o segundo número:'));
        if (!n2){
            alert('Erro - Entrada invalida.');
            calculadora();
        }else {
            let resultado;
        
            //FUNÇÕES
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
            }
         
            //CONDIÇÕES
            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
            calculadora();
        }
    } 
}

calculadora();

