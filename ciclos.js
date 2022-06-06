let saldo = 0;
let btcWallet = 0;
let ethWallet = 0;
const BTC = 28500;
const ETH = 6900;
function iniciar() {
    let choice = Number(prompt(`Bienvenido a Boinance. \n Su saldo es ${saldo} \n Usted tiene: \n BTC: ${btcWallet} \n ETH: ${ethWallet} \n ¿Qué desea hacer? \n 1-Añadir saldo \n 2-Comprar cripto \n 3-Salir`));
    if (choice == 1) {
        agregarSaldo();
    }
    else if(choice == 2) {
        comprarCrypto();
    }
    else if(choice == 3) {
        return;
    }
    else{
        alert(`Ingrese una opción valida`);
        iniciar();
    }
}
function agregarSaldo() {
    let continuar = true;
    while(continuar) {
        let ingreso = Number(prompt(`¿Cuánto desea cargar?`));
        saldo += ingreso; 
        let deseaContinuar = Number(prompt(`¿Desea agregar más saldo? \n 1-Si \n 2-No`));
        if (deseaContinuar == 2) {
            continuar = false;
        }
        else if (deseaContinuar != 1 && deseaContinuar != 2) {
            alert(`Opción invalida`);
            continuar = false;
        }
    }
    iniciar();
}
function comprarCrypto() {
    let select = Number(prompt(`¿Qué crypto desea comprar? \n 1-BTC. Valor: ${BTC} \n 2-ETH. Valor: ${ETH} \n 3-Volver al inicio`));
    if (select == 1) {
        let cuantoBtc = Number(prompt(`¿Cuánto BTC desea comprar?`));
        let saldoRestante = saldo - (BTC * cuantoBtc);
        if (saldoRestante < 0){
            alert(`No tiene suficiente saldo para realizar la operación`);
            comprarCrypto();
        }
        else{
            saldo = saldoRestante;
            btcWallet += cuantoBtc;
            alert(`Usted compró ${cuantoBtc} BTC, su nuevo saldo es: ${saldo}`);
        }        
    }
    else if (select == 2) {
        let cuantoEth = Number(prompt(`¿Cuánto ETH desea comprar?`));
        let saldoRestante = saldo - (ETH * cuantoEth);
        if (saldoRestante < 0){
            alert(`No tiene suficiente saldo para realizar la operación`);
            comprarCrypto();
        }
        else{
            saldo = saldoRestante;
            ethWallet += cuantoEth;
            alert(`Usted compró ${cuantoEth} ETH, su nuevo saldo es: ${saldo}`);
        }        
    }
    else if (select == 3) {
        iniciar();
    }
    else{
        alert(`Ingrese una opción válida`);
        comprarCrypto();
    }
    iniciar();
}
iniciar();






