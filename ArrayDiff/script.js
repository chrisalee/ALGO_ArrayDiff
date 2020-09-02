// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// function arrayDiff(a, b) {
//   if( a.length <= 0 || b.length <= 0 ) {
//     console.log(a);
//     return a;
//   } else {
//   var newArr = [];
//   for( var i = 0; i < a.length; i++ ) {
//     for( var j = 0; j < b.length; j++ ) {
//       if ( a[i] !== b[j] ) {
//         newArr.push( a[i] );
//       }
//       else {
//         j++;
//       }
//     }
//   }
//   console.log('The new array is [' + newArr + ']');
//   return newArr;
// }
//     }


function arrayDiff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

function arrayDiff(a, b) {
  console.log(a.filter(function(x) { return !b.includes(x); }));
  return a.filter(function(x) { return !b.includes(x); });
}


arrayDiff([], [4,5]);
arrayDiff([3,4], [3]);
arrayDiff([1,2,2,2,3],[2]);
arrayDiff([1,8,2], []);
arrayDiff([-16,1,12,-7,-10,-1,-15,2,-13,12,9],[9,12,2]);
arrayDiff([-7,-14,12,-9,-1,-7,2,7,-5,-1,-17],[-17,-1,7,2,-1,12,-5,-7,-14,-7]);




// Test.describe("Sample tests", function() {
//   Test.it("Should pass Sample tests", function() {
//     Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
//     Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
//     Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
//   });
// }); 