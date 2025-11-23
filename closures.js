function createFactoryFunc() {
  let initial = 0;
  return function add(amount) {
    initial = initial + amount;
    console.log(initial);
  }
}

const addCoin = createFactoryFunc();

addCoin(1);
addCoin(1);
addCoin(1);
createFactoryFunc()(1);
createFactoryFunc()(1);
createFactoryFunc()(1);
