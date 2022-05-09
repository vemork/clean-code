type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  toString() {
    if (this.name.length <= 0) throw Error("Name is empty");
    if (this.price === 0) throw Error("Price is Zero");
    if (this.size.length <= 0) throw Error("Size is empty");

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Pants", 10, 'S');
  // console.log("bluePants :>> ", bluePants);
  console.log(bluePants.toString());

  const bluePants2 = new Product("Red Pants", 20, 'M');
  // console.log("bluePants :>> ", bluePants);
  console.log(bluePants2.toString());
})();
