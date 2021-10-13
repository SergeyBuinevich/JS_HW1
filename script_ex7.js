console.log('----------Exersise-7(Задание-7)----------')

let S = 2000000,
    p = 10,
    years = 5,
    Pereplata = S/100*p+(S/years*(years-1))/100*p+(S/years*(years-2))/100*p+(S/years*(years-3))/100*p+(S/years*(years-4))/100*p;
    

console.log(Pereplata+'руб');