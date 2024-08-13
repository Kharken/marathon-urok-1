import { arrayOfImages } from './data.js'

// Поиск элементов

const imageTemplate = document.querySelector('#card-template').content;
const container = document.querySelector('.container');
const slides = container.children;


// Создание слайда
const createSlide = ({id, url, alt}) => {
	const slide = imageTemplate.cloneNode(true);
	const div = slide.querySelector('.slide')

	div.dataset.pictureId = id;
	div.style.backgroundImage = url;
	slide.querySelector('h3').textContent = alt;
	if (id === 1) {
		div.classList.add('active');
		}
	return slide;
}
// Рендеринг слайдов

const renderSlides = (items) => {
	const fragment = document.createDocumentFragment();

	items.forEach(item => {
		const image = createSlide(item);
		fragment.append(image);
	})
	
	container.append(fragment);
}

// Эффекты слайдов

const onClickShow = (evt) => {
	removeActiveClass();
	evt.target.classList.add('active');

}

function createSlideEffect() {
	container.addEventListener('click', onClickShow);
}

function removeActiveClass() {
	for (let slide of slides) {
		slide.classList.remove('active');
	}
}


renderSlides(arrayOfImages);

createSlideEffect();
