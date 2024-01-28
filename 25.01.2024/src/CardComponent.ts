// import { Clothes } from 'index';

export const CardComponent = (data: Clothes[], parent: HTMLElement): void => {
    data.forEach((item) => {
        const self = document.createElement('ul');
        const clothesTitle = document.createElement("li")
        const clothesId = document.createElement("li")
        const clothesPrice = document.createElement("li")
        const clothesSize = document.createElement("li")
        const clothesCount = document.createElement("li")
        const comment = document.createElement("li")
  
        clothesTitle.textContent = item.name
        clothesId.textContent = `${item._id}`
        clothesSize.textContent = `${item.size}`
        clothesPrice.textContent = `${item.price}`
        clothesCount.textContent = `${item.count}`
        
        if (clothesCount.textContent === '0'){
            comment.textContent = "EMPTY! Need to order this product."
            comment.style.color = 'red'
        } else {
            comment.textContent = 'Ok'
        }

        self.className = 'table__body-item'
        clothesTitle.className = 'table__body-item-description'
        clothesId.className = 'table__body-item-description'
        clothesSize.className = 'table__body-item-description'
        clothesPrice.className = 'table__body-item-description'
        clothesCount.className = 'table__body-item-description'
        comment.className = 'table__body-item-description'

        self.append(clothesTitle, clothesId, clothesSize, clothesPrice, clothesCount, comment)
        parent.append(self)
    })
  
  };
