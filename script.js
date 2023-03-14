function processNumbers(numbers) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(numbers);
      }, 3000);
    });
  }
  
  processNumbers([1, 2, 3, 4])
    .then(numbers => {
      const filteredNumbers = numbers.filter(number => number % 2 !== 0);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(filteredNumbers);
        }, 1000);
      });
    })
    .then(numbers => {
      const updatedNumbers = numbers.map(number => number * 2);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(updatedNumbers);
        }, 2000);
      });
    })
    .then(numbers => {
      const outputElement = document.getElementById('output');
      outputElement.innerText = numbers.join(', ');
    })
    .catch(error => {
      console.error(error);
    });