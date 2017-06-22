function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

// solution ^
// tests below
// it is important to note that sort modifies the original array, to work around that, one must
// concat the array in order to duplicate it, then sort it, then you find your middle element 

Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')
