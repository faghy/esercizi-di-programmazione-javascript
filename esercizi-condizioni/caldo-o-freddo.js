/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

let max = Math.max(a,b,c,d,e,f,g);
let min = Math.min(a,b,c,d,e,f,g);

console.log('giornata più calda = ' + max + ' , ' + 'giornata più fredda = ' + min );
