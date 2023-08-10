const storage = (() => {

  function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while(i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values
  }

  function addToStorage(newToDo) {
    localStorage.setItem(newToDo.title, JSON.stringify(newToDo))
  }

  return { addToStorage }

})();

export { storage }
