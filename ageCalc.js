/* Create a function that takes the age in years and returns the age in days.

Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.
*/

// Calculation of age in days = year * 365

const ageCalc = (year) => {
  const days = year * 365;
  return days;
};

console.log(ageCalc(50));
