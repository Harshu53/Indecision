class oldSyntax {
  constructor() {
    this.name = "Harshal";
    this.getName = this.getName.bind(this);
  }

  getName() {
    return `My name is ${this.name}`;
  }
}

const oldSyntaxObj = new oldSyntax();
const getName = oldSyntaxObj.getName;
console.log(getName());

class newSyntax {
  name = "Kavish";
  getnewName = () => {
    return `my new name is ${this.name}`;
  };
}

const newSyntaxObj = new newSyntax();
const getnewName1 = newSyntaxObj.getnewName;
console.log(getnewName1());