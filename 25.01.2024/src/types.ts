export enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
}

export interface Clothes {
    _id: number;
    name: string;
    price: number | null;
    size: Size;
    count: number;
}
  
export type PriceMark = {
    _id: number;
    price: number;
};

// export type Size = keyof typeof SIZE