class todo {
  constructor(title, description) {
    this.type = 'todo'
    this.title = title
    this.description = description
  }

  get title() {
    return this._title
  }

  set title(newTitle) {
    return this._title = newTitle
  }

  get description() {
    return this._description
  }

  set description(newDescription) {
    return this._description = newDescription
  }
}

export { todo }
