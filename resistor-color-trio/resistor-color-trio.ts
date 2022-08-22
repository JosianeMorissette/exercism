type Color = "black" | "brown" | "orange" | "yellow" | "red" | "green" | "blue" | "violet" | "grey" | "white"

function colorValue(color: Color): number {
  switch (color) {
    case "black":
      return 0;
    case "brown":
      return 1;
    case "red":
      return 2;
    case "orange":
      return 3;
    case "yellow":
      return 4;
    case "green":
      return 5;
    case "blue":
      return 6;
    case "violet":
      return 7;
    case "grey":
      return 8;
    case "white":
      return 9;
  }
}

export function decodedResistorValue([firstColor, secColor, thirdColor]: Color[]): string {
  let firstValue = colorValue(firstColor)
  let secValue = colorValue(secColor)
  let thirdValue = colorValue(thirdColor)

  let resistorValue = ((firstValue * 10) + secValue) * Math.pow(10, thirdValue)

  if (resistorValue > 999) {
    let kilohmResistor = resistorValue / 1000

    return `${kilohmResistor} kiloohms`
  } else {
    return `${resistorValue} ohms`
  }
}




