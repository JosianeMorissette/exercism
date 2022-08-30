type DnaNucleo = "A" | "C" | "G" | "T"

export function toRnaNucleo(dnaNucleotide: DnaNucleo): string {
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


export function toRna(dna: string): string {

  return dna
    .split("")
    .map((nucleo) => {
      let dnaNucleo = nucleo as DnaNucleo
      if (dnaNucleo === "A" || dnaNucleo === "C" || dnaNucleo === "G" || dnaNucleo === "T") {
        return toRnaNucleo(dnaNucleo)
      } else {
        throw 'Invalid input DNA.'
      }


    })
    .join("")


}