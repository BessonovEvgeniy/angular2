import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  private defaultOrderByDsc = true;

  transform(values: any[], orderByFieldName: string, orderByDsc?: boolean): any[] {

    if (orderByDsc == null) {
      orderByDsc = this.defaultOrderByDsc;
    }
    if (values != null) {
      // const newValues = values.slice();
      console.log('Before ' + values.length);
      values.sort((val1, val2) => {
        const val1FieldValue = val1[orderByFieldName];
        const val2FieldValue = val2[orderByFieldName];

        let rez = 0;
        if (val1FieldValue < val2FieldValue) {
          rez = orderByDsc ? -1 : 1;
        } else if (val1FieldValue > val2FieldValue) {
          rez = orderByDsc ? 1 : -1;
        }
        return rez;
      });
  console.log('After' + values.length);
      return values;
    } else {
      return null;
    }
  }

}
