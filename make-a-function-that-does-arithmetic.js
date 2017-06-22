function arithmetic(a, b, operator){

if(operator === "add") {
  return a + b;
} else if(operator === "subtract") {
  return a-b;
} else if(operator === "multiply") {
  return a*b;
} else if(operator === "divide") {
  return a/b;
}

//function above, tests below

Test.assertEquals(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
Test.assertEquals(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a mimus b!");
Test.assertEquals(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
Test.assertEquals(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
