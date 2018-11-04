export enum Category {Fruits, Vegetables}

export class ProductModel {

  constructor(public uid: string,
              public name: string,
              public description: string,
              public price: number,
              public isAvailable: boolean,
              public category: Category) {}
}
