// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
// profitableGamble(0.2, 50, 9)

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}

console.log(profitableGamble(0.2, 20, 9));
