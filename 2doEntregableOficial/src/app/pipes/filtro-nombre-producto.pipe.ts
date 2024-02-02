import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombreProducto'
})
export class FiltroNombreProductoPipe implements PipeTransform {

  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }

    return items.filter(item =>
      item.nombreProducto.toLowerCase().includes(filtro.toLowerCase())
    );
  }
}
