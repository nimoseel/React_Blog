function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`);
  }
  
  function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
  }
  
  function getChicken(){
    return Promise.reject(new Error('can not find 🐓'));
  }

//   getChicken()
//   .catch(()=>'🐔')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);

  async function getChicken(){
    const fetchEgg = await fetchEgg();
    const fryEgg = await fryEgg();

    return getChicken();
  }

  getChicken()
  .then((chicken)=> console.log(chicken))