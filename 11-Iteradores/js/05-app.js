let i = 1; //Inicio

do{
    if(i %15 ===0){
        console.log(`Fizz buzz ${i}`);
    }else if(i % 5 ===0){
        console.log(`Buzz ${i}`);
    }else if (i %3 ===0){
        console.log(`Fizz ${i}`);
    }

    i++; //Incremento
}while (i <100); //Condicion