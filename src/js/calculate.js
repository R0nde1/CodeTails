export function calculateCocktails() {
  const width = document.body.clientWidth;
  let numberOfCocktails = 0;

  if (width <= 460) {
    numberOfCocktails = 3;
  } else if (width <= 1230) {
    numberOfCocktails = 6;
  } else numberOfCocktails = 9;
  return numberOfCocktails;
}