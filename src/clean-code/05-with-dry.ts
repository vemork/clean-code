type Size2 = "" | "S" | "M" | "XL";

class Product2 {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size2 = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error (`Type ${typeof this[key]} is not supported.`)
          break;
      }
    }

    return true;
  }
  toString() {
    // if (this.name.length <= 0) throw Error("Name is empty");
    // if (this.price === 0) throw Error("Price is Zero");
    // if (this.size.length <= 0) throw Error("Size is empty");
    if (!this.isProductReady) return 
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product2("Blue Pants", 10, "S");
  // console.log("bluePants :>> ", bluePants);
  console.log(bluePants.toString());

  const bluePants2 = new Product2("Red Pants", 20, "M");
  // console.log("bluePants :>> ", bluePants);
  console.log(bluePants2.toString());
})();
