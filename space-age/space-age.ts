export function planetYear(planet: string): number {
  switch (planet) {
    case "mercury":
      return 0.2408467;
    case "venus":
      return 0.61519726;
    case "earth":
      return 1;
    case "mars":
      return 1.8808158;
    case "jupiter":
      return 11.862615;
    case "saturn":
      return 29.447498;
    case "uranus":
      return 84.016846;
    case "neptune":
      return 164.79132;
    default:
      throw "Invalid input planet.";
  }
}

export function age(planet: string, seconds: number): number {
  return Number(((seconds / 31557600 / planetYear(planet))).toFixed(2))
}

console.log(age("earth", 1000000000))