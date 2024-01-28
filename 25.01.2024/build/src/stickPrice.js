// import { Clothes, PriceMark } from './index'
export function stickPrice(clothes, marks) {
    clothes.forEach(item => {
        marks.forEach(mark => {
            if (item._id === mark._id) {
                item.price = mark.price;
            }
        });
    });
}
//# sourceMappingURL=stickPrice.js.map