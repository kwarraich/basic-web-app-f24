export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    //TODO add your name below
    //TODO update the corresponding test case in __tests__
    return ( "kwarraic-313" );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    // Extract the numbers from the query using a regular expression
    const numbers = query.match(/\d+/g)?.map(Number) || [];
  
    if (numbers.length < 2) {
      return "Query must contain at least two numbers.";
    }
  
    // Perform the addition by reducing the array of numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Return the sum directly
    return sum.toString();
}


if (query.toLowerCase().includes("what is")) {
  // Extract the numbers and operators from the query
  const expression = query.match(/(\d+|\bplus\b|\bmultiplied by\b)/g);

  if (!expression || expression.length < 3) {
      return "Query must contain a valid expression.";
  }

  // Replace words with symbols for easier evaluation
  const evalExpression = expression.map(token => {
      if (token === "plus") return "+";
      if (token === "multiplied by") return "*";
      return token;
  }).join(" ");

  // Evaluate the expression
  const result = eval(evalExpression);

  // Return the result as a string
  return result.toString();
}

  
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    // Extract the numbers from the query using a regular expression
    const numbers = query.match(/\d+/g)?.map(Number) || [];
  
    if (numbers.length !== 2) {
      return "Query must contain exactly two numbers.";
    }h
  
    // Perform the multiplication
    const product = numbers[0] * numbers[1];
  
    // Return the product as a string
    return product.toString();
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    
    // Initialize an array to hold prime numbers
    const primes = [];
  
    // Check each number if it's prime
    for (const num of numbers) {
      if (num > 1) { // 0 and 1 are not prime
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false; // Found a factor, not prime
            break;
          }
        }
        if (isPrime) {
          primes.push(num); // Add to primes array if it's prime
        }
      }
    }
  
    // Return the result as a string
    if (primes.length === 0) {
      return "No prime numbers found.";
    } else {
      return `The prime numbers are: ${primes.join(", ")}.`;
    }
  }
  
  
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    // Extract the numbers from the query using a regular expression
    const numbers = query.match(/\d+/g)?.map(Number) || [];
  
    if (numbers.length !== 2) {
      return "Query must contain exactly two numbers.";
    }
  
    // Perform the minus
    const product = numbers[0] - numbers[1];
  
    // Return the product as a string
    return product.toString();
  }


  if (query.toLowerCase().includes("to the power of")) {
    // Extract numbers from the query
    const numbers = query.match(/(\d+)/g)?.map(Number) || [];
    
    if (numbers.length !== 2) {
      return "Query must contain exactly two numbers: a base and an exponent.";
    }
    
    // Perform the exponentiation
    const base = numbers[0];
    const exponent = numbers[1];
    const result = Math.pow(base, exponent);
  
    // Return the result as a string
    return result.toString();
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    // Name: Khadija Warraich
    // Extract the numbers from the query using a regular expression
    const numbers = query.match(/\d+/g)?.map(Number) || []; // Handle null case with ?. and fallback to empty array
  
    if (numbers.length === 0) {
      return "No numbers found.";
    }
  
    // Find the largest number
    const largestNumber = Math.max(...numbers);
  
    // Return the largest number as a string
    return largestNumber.toString();
  }
  

  

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "kwarraic" );
  }
  return "";
}
