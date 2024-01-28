// import { Clothes, PriceMark } from './index'

export function stickPrice (clothes: Clothes[], marks: PriceMark[]): void {
    clothes.forEach(item => {
        marks.forEach(mark => {
            if(item._id === mark._id){
                item.price = mark.price
            }
        })
    })
}