import {CommentModel} from './comment.model';

export enum Category {Fruits, Vegetables}

export class ProductModel {

  categoryName: String;

  constructor(public uid: string,
              public name: string,
              public description: string,
              public price: number,
              public isAvailable: boolean,
              public category: Category,
              public comments?: CommentModel[]) {

    this.categoryName = Category[this.category];
  }
}
