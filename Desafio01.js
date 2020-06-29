const nome = 'Antonio'
const peso = 75
const altura = 1.70
var IMC = peso / (altura * altura)

if (IMC >= 30 ){
    console.log(`${nome} você está acima do peso!`)
}else{
    console.log(`${nome} você não está acima do peso!`)
}