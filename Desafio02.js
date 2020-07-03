/*===================================================== 
                    VARIÁVEIS
===================================================== */
const nome = "Márcio";
const sexo = "M";
const idade = 55;
const contribuicao = 35;
const soma = idade + contribuicao

/*==================================================== 
                CONDICIONAL DO SEXO
======================================================*/

if (sexo === "F") {
    /*================================================ 
    VERIFICA QUANTO TEMPO FALTA PARA ATINGIR O TEMPO
    MÍNIMO ESTABELECIDO NA REGRA
    ==================================================*/
    let restCont = 30 - contribuicao
    let restIdade = 55 - idade

    /*================================================ 
    Condição que verifica se a condição estabelecida na
    regra foi satisfeita
    =================================================*/
    if ((soma >= 85) && (contribuicao >= 30)) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        if (restCont < 0) {
            restCont = 0 //Zerando os valores caso negativo
        }
        if (restIdade < 0) {
            restIdade = 0 //Zerando os valores caso negativo
        }

        /* ===============================================
        Exceção a regra, caso o usuário tenha atingido o
        tempo Mínimo de 85 anos
        ==================================================*/
        if (soma >= 85) {
            console.log(`${nome}, você pode se aposentar! 
        Mas não de forma integral, pois não atingiu o tempo
        mínimo de contribuição, somente o de idade!`)

        } else {

            console.log(`${nome}, você não pode se aposentar! 
            Falta ${restCont} anos de contribução e ${restIdade} anos de
            idade para se aposentar!`)
        }
    }
} else {
      /*================================================ 
    VERIFICA QUANTO TEMPO FALTA PARA ATINGIR O TEMPO
    MÍNIMO ESTABELECIDO NA REGRA
    ==================================================*/
    let restCont = 35 - contribuicao
    let restIdade = 60 - idade
    /*================================================ 
    Condição que verifica se a condição estabelecida na
    regra foi satisfeita
    =================================================*/
    if ((soma >= 95) && (contribuicao >= 35)) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        if (restCont < 0) {
            restCont = 0 //Caso seja negativo atribui 0
        }
        if (restIdade < 0) {
            restIdade = 0   //Caso seja negativo atribui 0
        }
        /* ===============================================
        Exceção a regra, caso o usuário tenha atingido o
        tempo Mínimo de 85 anos
        ==================================================*/
        if (soma >= 95) {
            console.log(`${nome}, você pode se aposentar! 
            Mas não de forma integral, pois não atingiu o tempo
            mínimo de contribuição, somente o de idade!`)

        } else {

            console.log(`${nome}, você não pode se aposentar! 
            Falta ${restCont} anos de contribução e ${restIdade} anos de
            idade para se aposentar!`)
        }
    }
}