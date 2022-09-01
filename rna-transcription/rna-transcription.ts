
export function toRnaNucleo(dnaNucleotide: string): string {
  switch (dnaNucleotide) {
    case "A":
      return "U";
    case "C":
      return "G";
    case "G":
      return "C";
    case "T":
      return "A";
    default:
      throw "Invalid input DNA.";
  }
}


export function toRna(input: string): string {

  return input
    .split("")
    .map((nucleo) => {
      return toRnaNucleo(nucleo)
    })
    .join("")


}