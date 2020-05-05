const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['x', 'y', 'z'];

function isCommonElement(arr1,arr2) {
  const map = {};
  arr1.map((a,i) =>{
    if(!map[a]) {
      console.log(a);
      map[a] = true;
    }
  });
  for (const b of arr2) {
    if(map[b]) {
      return true;
    }
  }
  console.log('map', map);
  return false;
}

const res = isCommonElement(arr1,arr2);
console.log(res);