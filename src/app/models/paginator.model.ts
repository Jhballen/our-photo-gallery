import { EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/**
 * Paginador para el cambios de numerode imagenes para ver
 */
export class MatPaginator{
    pageIndex: number;
    pageSize: number;
    length: number;
    page: EventEmitter<PageEvent>;
}