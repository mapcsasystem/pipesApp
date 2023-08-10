export interface IHero {
  name: string;
  canFly: boolean;
  color: IColorEnum;
}

export enum IColorEnum {
  red,
  black,
  blue,
  green,
}
