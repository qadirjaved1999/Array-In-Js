console.log("How to reverse array using Stack");

const reverseArray = (fetchArray) => {
  // console.log(myArray);

  //create Stack
  let stack = []; //   let stack = new Stack();

  for (let i = 0; i <= fetchArray.length; i++) {
    stack.push(fetchArray[i]); // Copy All Elements in Stack
  }

  for (let i = 0; i <= fetchArray.length; i++) {
    fetchArray[i] = stack.pop(); // Remove All Elements in Stack
  }

  return fetchArray;
};

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

reverseArray(myArray);
console.log(myArray);
