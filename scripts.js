let saludos=parseInt(prompt("Ingrese la cantidad de veces que quiere que lo saludemos"));
if(!isNaN(saludos)){
    for(let i=1;i<=saludos;i++){
        alert(`Que tengas un buen día ${i}`);
    }
}
