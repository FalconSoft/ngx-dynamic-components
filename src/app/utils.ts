export function getSlugFromStr(str: string): string {
  return str.replace(/ /g, '-').toLocaleLowerCase();
}
