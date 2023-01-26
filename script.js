const burger = document.querySelector('.menu-burger')
burger.addEventListener('click', e => {
  document.body.classList.toggle('menu-burger-open')
})
const menuFilter = document.querySelector('.goods-sort-menu')
const btnFilter = document.querySelector('.goods-sort-btn')
btnFilter.addEventListener('click', e => {
  menuFilter.classList.toggle('hidden')
})
menuFilter.addEventListener('click',e => {
  let textContent = document.querySelector('.goods-sort-input').textContent
  document.querySelector('.goods-sort-input').textContent = e.target.textContent
  e.target.textContent = textContent
} , false )
const swiper = new Swiper(".advert-body", {
  slidesPerView: 1,
  pagination: {
    el: '.advert-body-fraction',
    type: 'fraction',
  }
});
const goodsSubtitles = document.querySelectorAll('.goods-subtitle')
const goodsCards = document.querySelectorAll('.goods-cards')
goodsSubtitles.forEach(item => {
  item.addEventListener('click', e => {
    goodsSubtitles.forEach(i => i.classList.remove('current'))
    item.classList.add('current')
    switch (item.textContent) {
      case 'Популярные товары':
        goodsCards.forEach(it => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.popular').classList.add('show')
        })
        break;
      case 'Акции':
        goodsCards.forEach(it => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.sales').classList.add('show')
        })
      case 'Просмотренные':
        goodsCards.forEach(it => {
          it.classList.remove('show')
          it.classList.add('hide')
          document.querySelector('.goods-cards.seen').classList.add('show')
        })
      default:
        break;
    }
  })
})
goodsSubtitles[0].click()
