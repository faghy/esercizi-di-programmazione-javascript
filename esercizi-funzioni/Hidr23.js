function f(oggetto) {
    for (var i in oggetto) {
        console.log(i + ' '+oggetto[i])
    }
}

function f1(ogg, call) {
    call(ogg);
}

oggett = {nome: 'pippo', cognome: 'paperino'}

f1(oggett,f);
