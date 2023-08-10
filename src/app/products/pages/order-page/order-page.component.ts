import { Component } from '@angular/core';
import { IColorEnum, IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  public isUpperCase = false;
  public orderBy?: keyof IHero;
  heros: IHero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: IColorEnum.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: IColorEnum.black,
    },
    {
      name: 'Superman',
      canFly: true,
      color: IColorEnum.blue,
    },
    {
      name: 'Deadpool',
      canFly: false,
      color: IColorEnum.red,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: IColorEnum.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof IHero) {
    this.orderBy = value;
  }
}
