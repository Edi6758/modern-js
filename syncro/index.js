//execução sincrona é uma  execução linha por linha....
//execução assincrona não trava a aplicação

//codigo  sincrono
function step02() {
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

//codigo assincrono
console.log('Passo 04')
setTimeout(() => { //setTime out é assincrono...
    console.log('Passo 05')
}, 2 * 1000)
console.log('Passo 06')