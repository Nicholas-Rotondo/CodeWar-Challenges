//my solution for coupon code challenge

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var currentConverted = new Date(currentDate);
  var expirationConverted = new Date(expirationDate);
  if((enteredCode === correctCode) && (currentConverted <= expirationConverted)) {
    return true;
  } else {
    return false;
  }
}

//tests below!

Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
