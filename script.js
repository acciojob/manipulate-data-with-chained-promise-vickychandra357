function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }
  getNumbers()
  .then(numbers => {
    // Filter out odd numbers
    const filteredNumbers = numbers.filter(num => num % 2 !== 0);
    return filteredNumbers;
  })
  .then(filteredNumbers => {
    // Multiply even numbers by 2
    const multipliedNumbers = filteredNumbers.map(num => num * 2);
    return multipliedNumbers;
  })
  .then(result => {
    // Update the HTML element with ID "output"
    const output = document.getElementById("output");
    output.innerText = result.join(", ");
  })
  .catch(error => {
    console.error(error);
  });