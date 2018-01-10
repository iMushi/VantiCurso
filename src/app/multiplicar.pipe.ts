import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'multiplicar'
})

export class MultiplicarPipe implements PipeTransform {

	transform(value: any, args?: any): any {

		return Number(value) * Number(args);
	}
}
