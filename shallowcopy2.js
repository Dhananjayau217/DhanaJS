//shallowcopy

const obj1 = {
  name: 'John',
  age: 20,
  address: {
    street: '123 Main Street',
    city: 'New York'
  }
};
const obj2 =obj1;
obj2.name = 'Jane';
obj2.address.street = '456 Second Street';
console.log(obj1);
console.log(obj2);

/*Output:

{
  name: 'Jane',
  age: 20,
  address: { street: '456 Second Street', city: 'New York' }
}
{
  name: 'Jane',
  age: 20,
  address: { street: '456 Second Street', city: 'New York' }
}
  */