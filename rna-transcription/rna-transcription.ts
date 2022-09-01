
const dna = ["A", "C", "G", "T"] as const

type Dna = (typeof dna)[number]

const isDna = (nucleo: any): nucleo is Dna => { return dna.includes(nucleo) }

export function toRnaNucleo(dnaNucleotide: Dna): string {
  switch (dnaNucleotide) {
    case "A":
      return "U";
    case "C":
      return "G";
    case "G":
      return "C";
    case "T":
      return "A";

  }
}


export function toRna(input: string): string {

  return input
    .split("")
    .map((nucleo) => {
      if (isDna(nucleo)) {
        return toRnaNucleo(nucleo)
      } else {
        throw 'Invalid input DNA.'
      }
    })
    .join("")


}