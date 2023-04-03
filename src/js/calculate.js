export function calculateCocktails() {
  const width = document.body.clientWidth;
  let numberOfCocktails = 3;

  if (width >= 768) {
  numberOfCocktails = 6;
}
if (width >= 1280) {
  numberOfCocktails = 9;
}
  return numberOfCocktails;
}