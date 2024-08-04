let cart = {
    'ffsgz23': {
        "name": "flover", 
        "count" : 3,
},
    'sdgsg28': {
        "name": "flover", 
        "count" : 3,
}

};



document.onclick = event =>{
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}
//уменьшение товара
const plusFunction = id => {
    cart[id]['count']++; 
    renderCart(); 
}
//увеличение товара
const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deleteFunction(id); 
    return true
    }
    cart[id]['count']--; 
    renderCart(); 
}

//удаление
const deleteFunction = id => {
    delete cart[id];
    renderCart(); 
}

const renderCart = () => {
console.log(cart);
}
renderCart();





const arrow__home = {
    el: document.querySelector('.arrow__home'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  arrow__home.addEventListener();