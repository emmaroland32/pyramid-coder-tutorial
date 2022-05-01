// Write a function that takes an integer minutes and converts it to seconds.
// convert(20) => 20*60 = 180

const Convert = (minutes) => {
  const seconds = minutes * 60;

  return seconds;
};

console.log(Convert(60));
