(() => {
  function isRedFruit(fruit: string): boolean {
    const redFruitList = ["manzana", "cereza", "ciruela"];
    // return redFruitList.includes(fruit) ? true : false;
    return redFruitList.includes(fruit);
  }

  type FruitColor = "red" | "yellow" | "purple";

  function getFruitsByColor(color: FruitColor): string[] {
    // const redFruitList = ["manzana", "fresa"];
    // const yellowFruitList = ["piña", "banana"];
    // const purpleFruitList = ["moras", "uvas"];

    // switch (color) {
    //   case "red":
    //     return redFruitList;
    //     break;
    //   case "yellow":
    //     return yellowFruitList;
    //     break;
    //   case "purple":
    //     return purpleFruitList;
    //     break;
    //   default:
    //     throw Error("the color must be: red, yellow, purple");
    //     break;
    // }

    // switch (color) {
    //   case "red":
    //     return redFruitList;
    //   case "yellow":
    //     return yellowFruitList;
    //   case "purple":
    //     return purpleFruitList;
    //   default:
    //     throw Error("the color must be: red, yellow, purple");
    // }

    const fruitsByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColor).includes(color))
      throw Error("the color must be: red, yellow, purple");

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) {
      return "First step broken.";
    }
    if (!isSecondStepWorking) {
      return "Second step broken.";
    }

    if (!isThirdStepWorking) {
      return "Third step broken.";
    }

    if (!isFourthStepWorking) {
      return "Fourth step broken.";
    }

    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
