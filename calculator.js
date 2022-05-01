const addition = (a, b) => {
  const c = a + b;
  return c;
};

const subtraction = (a, b) => {
  // TODO: confirm which value is greater among the input
  if (a < b) {
    return 'A must be greater than B for a positive number';
  }
  const c = a - b;
  return c;
};

const multiplication = (a, b) => {
  const c = a * b;
  return c;
};

const division = (a, b) => {
  // TODO: make sure not to return infinite value
  if (b == 0) {
    return 'You cannot divide a value by zero';
  }
  const c = a / b;
  return c;
};

// Characters  = 2+2

//    = : shalow equality
// == : hard equality -

const Calculator = (a, b, char) => {
  let result = 0;

  if (char == '+') {
    result = addition(a, b);
  } else if (char == '-') {
    result = subtraction(a, b);
  } else if (char == '/') {
    result = division(a, b);
  } else if (char == '*') {
    result = multiplication(a, b);
  } else {
    console.log('Nothing to give');
  }

  console.log(result);
};

Calculator(15, 0, '/');
