const storage = (() => {

  PubSub.subscribe('createBtnClicked', addToStorage)

  function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while(i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values
  }

  function addToStorage(_, newToDo) {
    localStorage.setItem(newToDo.title, JSON.stringify(newToDo))

    console.log(allStorage())
  }

})();

export { storage }
