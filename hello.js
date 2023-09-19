// para rodar digite no temrinal node hello

const bestDrink = (drink) => {

  if (drink === "cafe") {
    return "cafe é bom";
  } else {
    return "cafe é ruim";
  }
};

const drink = "cafe";
const resultado = bestDrink(drink);
console.log(resultado);
