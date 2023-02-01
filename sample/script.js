class Myclass {
  constructor() {
    this.gg = document.querySelector(".con");
  }

  add() {
    this.gg.addEventListener("click", () => {
      console.log(0);
    });
  }
}

const obj = new Myclass();
console.log(obj.add());

function gh() {
  this.jj = document.querySelector();
}
