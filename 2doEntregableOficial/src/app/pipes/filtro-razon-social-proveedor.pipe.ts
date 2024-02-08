import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroRazonSocialProveedor'
})
export class FiltroRazonSocialProveedorPipe implements PipeTransform {

  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }

    const resultados = items.filter(item =>
      item.razonSocialProveedor.toLowerCase().includes(filtro.toLowerCase())
    );

    // Si no hay resultados, devolver un mensaje indicando que no se encontraron registros
    if (resultados.length === 0) {
      return [{ mensaje: 'No se encontraron registros' }];
    }

    return resultados;
  }
}