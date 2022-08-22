export const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

type Colors = typeof COLORS[number]

export function colorCode(colors: Colors): number {
  return COLORS.indexOf(colors)

}