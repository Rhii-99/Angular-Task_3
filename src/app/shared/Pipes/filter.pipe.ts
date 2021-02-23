import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], filter: string): Product[] {
    if (!products || !filter) {
        return products;
    }
    return products.filter(product => product.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}
}


