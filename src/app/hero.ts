export interface IHero {
    id?: number | string;
    name: string;
    img: string;
    starId: number;
    weaponId: number; 
    elementId : number;
    cityId: number;
  }
  export interface Iuser {
    id?: number;
    name: string;
    password: string;
    money: number
  }
  export interface Iaccount {
    id?: number;
    name: string;
    password: string;
    price: number
  }
  export interface Istar{
    id?:number;
    star:number;
  }
  export interface Iweapons{
    id?:number;
    name: string;
    starId : number;
  }
  export interface Ielement {
    id?: number;
    name:string;
    url: string;
  }
  export interface Icity {
    id?: number;
    name:string;
  }