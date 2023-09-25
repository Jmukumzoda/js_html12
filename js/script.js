let header = document.createElement('header'),
    centre = document.createElement('div'),
    left = document.createElement('div'),
    nav = document.createElement('nav'),
    svg = document.createElement('img'),
    p_header = document.createElement('p'),
    a = document.createElement('a'),
    centre2 = document.createElement('div'),
    p2_header = document.createElement('p'),
    right = document.createElement('div'),
    a1 = document.createElement('a'),
    a2 = document.createElement('a'),
    select = document.createElement('section'),
    option = document.createElement('option'),
    option2 = document.createElement('option');

header.classList.add('header')
centre.classList.add('centre')
left.classList.add('left')
nav.classList.add('nav_bar')
svg.classList.add('nav_barimg')
centre2.classList.add('centre2')
p2_header.classList.add('centre2p')
right.classList.add('right')
a1.classList.add('righta')
a2.classList.add('righta')
select.classList.add('outline-none')
option.classList.add('outline_noneoption')
option2.classList.add('outline_noneoption')


a.href = "/ru/about/delivery-points"
a.innerHTML = 'Пункты выдачи'
a1.href = "/ru/faq"
a1.innerHTML = 'Вопрос-ответ'
a2.href = "/ru/faq"
a2.innerHTML = 'Мои заказы'
svg.src = '/img/location.png'
p_header.innerHTML = 'Город:Ташкент'
p2_header.innerHTML = 'Доставим ваш заказ бесплатно — всего за 1 день!'
option.innerHTML = 'Русский'
option2.innerHTML = 'Ozbekcha'



let body2 = document.body

body2.append(header)
header.append(centre)
centre.append(left)
left.append(nav)
nav.append(svg)
nav.append(p_header)
nav.append(a)

centre.append(centre2)
centre2.append(p2_header)

centre.append(right)
right.append(a1, a2)
right.append(select)
select.append(option)


let main = document.createElement('main'),
    section = document.createElement('section'),
    container = document.createElement('div'),
    left1 = document.createElement('div'),
    left1_img = document.createElement('img'),
    centre1 = document.createElement('div'),
    button = document.createElement('button'),
    img1 = document.createElement('img'),
    input = document.createElement('input'),
    icon1 = document.createElement('div'),
    img_icon1 = document.createElement('img'),
    p_icon = document.createElement('p'),
    icon2 = document.createElement('div'),
    img_icon2 = document.createElement('img'),
    p2_icon = document.createElement('p'),
    icon3 = document.createElement('div'),
    img_icon3 = document.createElement('img'),
    p3_icon = document.createElement('p');

section.classList.add('sec1')
container.classList.add('container')
centre1.classList.add('centre1')
left1.classList.add('left1')
button.classList.add('button')
img1.classList.add('buttonimg')
input.classList.add('centre1input')
icon1.classList.add('icon1', 'top')
img_icon1.classList.add('icon1img')
icon2.classList.add('icon2', 'top')
img_icon2.classList.add('icon2img')
icon3.classList.add('icon3', 'top')
img_icon3.classList.add('icon3img')


button.type = "button"
button.innerHTML = 'Каталог'
img1.src = './img/currency.png'
input.type = 'text'
input.placeholder = 'Искать товары и категории'
img_icon1.src = './img/free-icon-user-account-9372916.png'
p_icon.innerHTML = 'Войти'
img_icon2.src = './img/free-icon-love-and-romance-8579290.png'
p2_icon.innerHTML = 'Избранное'
img_icon3.src = './img/free-icon-handbag-3345405.png'
p3_icon.innerHTML = 'Корзина'
left1_img.src = "./img/download.svg"



let body3 = document.body

body3.append(main)
main.append(section)
section.append(container)
container.append(left1)
left1.append(left1_img)
container.append(centre1)
centre1.append(button)
button.append(img1)
centre1.append(input)
centre1.append(icon1)
icon1.append(img_icon1)
icon1.append(p_icon)
centre1.append(icon2)
icon2.append(img_icon2)
icon2.append(p2_icon)
centre1.append(icon3)
icon3.append(img_icon3)
icon3.append(p3_icon)

let div = document.createElement('div')
let articel = document.createElement('article')
let img = document.createElement('img')
let text = document.createElement('div')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let h6 = document.createElement('h6')
let h5 = document.createElement('h5')
let p_img = document.createElement('img')
let h4 = document.createElement('h4')

div.classList.add('glav')
articel.classList.add('article')
img.classList.add('img')
text.classList.add('text')
h6.classList.add('h6')
p_img.classList.add('p_img')

h3.innerHTML = 'Подсолнечное масло Ideal, 1 л'
p.innerHTML = '5.0( 14 оценок )Более 600 заказов'
h5.innerHTML = 'От 3 000 сум/мес в рассрочку'
h6.innerHTML = '34 000 сум'
h4.innerHTML = '25 000 сум'

img.src = "./img/cjip2qsjvf2hn7fe7kng.jpg"
img.alt = "oil"
p_img.src = "./img/free-icon-star-1828884.png"
p_img.alt = "star"

let body = document.body

body.append(div)
div.append(articel)
articel.append(img)
articel.append(text)
text.append(h3)
text.append(p)
text.append(h5)
text.append(h6)
text.append(h4)

