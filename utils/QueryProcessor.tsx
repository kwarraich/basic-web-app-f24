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
