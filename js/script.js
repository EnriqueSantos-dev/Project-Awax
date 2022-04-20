let containerSliderWidth = document.querySelector('.slider-width'),
	quantSliders = document.querySelectorAll('.slider'),
	sliderBottunBox = document.querySelector('.botoes-slider'),
	boxButtunCard = document.querySelector('.button-slider-team'),
	boxButtunHappy = document.querySelector('.button-box-happy-clients'),
	containerSliderWidthCard = document.querySelector('.slider-width-team'),
	containerWidthProductsType = document.querySelector('.slider-width-products-type'),
	menuNav = document.querySelector('.menu nav'),
	menuLi = document.querySelectorAll('.menu nav ul li'),
	menuLinkActive = document.querySelectorAll('.menu nav ul li a'),
	gallery = document.querySelector('.grid-gallery--pics');

// fuction que reseta o scroll da página
function scrollReset() {
	window.scrollTo(window.scrollY, 0);
}
// efeito no header
window.addEventListener('scroll', () => {
	if (window.scrollY > 5) {
		document.querySelector('header').style.position = 'fixed';
		document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0.9)';
	} else {
		document.querySelector('header').style.position = 'static';
		document.querySelector('header').style.backgroundColor = '#000';
	}
});
// menu active
menuLinkActive.forEach((item, index) => {
	item.addEventListener('click', () => {
		document.querySelector('.menu nav ul li.active').classList.remove('active');
		menuLi[index].classList.add('active');
	});
});

// widht dinamic container sliders and buttons dinamic insert
function insertWidthContent(conatiner, lenghtSliders, unity) {
	conatiner.style.width = `${lenghtSliders * 100}${unity}`;
}

function InsertButtonSpans(lenghtItemsContainer, parentElement) {
	for (let i = 0; i < lenghtItemsContainer; i++) {
		let span = document.createElement('span');
		span.classList.add('default-button-slider');
		span.setAttribute(`data-key`, `${i}`);
		if (i == 0) {
			span.classList.add('active');
		}
		parentElement.append(span);
	}
}

insertWidthContent(containerSliderWidth, quantSliders.length, 'vw');
InsertButtonSpans(quantSliders.length, sliderBottunBox);

// next and prev slider function
document.querySelectorAll('.botoes-slider span').forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('.botoes-slider span.active').classList.remove('active');
		let marginVal = `-${item.getAttribute('data-key') * 100}vw`;
		containerSliderWidth.style.marginLeft = marginVal;
		e.target.classList.add('active');
		currentIndex = item.getAttribute('data-key');
		clearInterval(sliderAuto);
		sliderAuto = setInterval(nextSlider, 5000);
	});
});

// slider automatic
let currentIndex = 0;
function nextSlider() {
	document.querySelector('.botoes-slider span.active').classList.remove('active');
	if (currentIndex == quantSliders.length - 1) {
		currentIndex = 0;
		containerSliderWidth.style.marginLeft = `${currentIndex}vw`;
	} else {
		currentIndex++;
		containerSliderWidth.style.marginLeft = `-${currentIndex * 100}vw`;
	}
	document.querySelectorAll('.botoes-slider span')[currentIndex].classList.add('active');
}
// Run slider auto
let sliderAuto = setInterval(nextSlider, 5000);

// Menu active
let btnMobile = document.querySelector('.btn-mobile');
btnMobile.addEventListener('click', () => {
	btnMobile.classList.toggle('active');
	menuNav.classList.toggle('active');
});

// maker gallery
let nodeCopy = document.querySelector('.photo');
photosGallery[0].all.map((item, indexOf) => {
	let photoItem = document.querySelector('.photo').cloneNode(true);

	photoItem.style.backgroundImage = `url('${item.img}')`;
	photoItem.querySelector('h5').innerHTML = 'about';
	photoItem.querySelector('p').innerHTML = item.descri;

	gallery.append(photoItem);
});

let menuChangePhotos = document.querySelectorAll('.change-options ul li');
menuChangePhotos.forEach(el => {
	el.addEventListener('click', event => {
		document.querySelector('.change-options li.active').classList.remove('active');
		el.classList.add('active');
		let key = el.getAttribute('data-key');
		gallery.innerHTML = '';

		switch (key) {
			case 'all':
				photosGallery[0].all.map((item, index) => {
					let photoItem = document.querySelector('.photo').cloneNode(true);

					photoItem.style.backgroundImage = `url('${item.img}')`;
					photoItem.querySelector('h5').innerHTML = 'about';
					photoItem.querySelector('p').innerHTML = item.descri;

					gallery.append(photoItem);
				});
				break;
			case 'photos':
				photosGallery[1].models.map((item, index) => {
					let photoItem = document.querySelector('.photo').cloneNode(true);

					photoItem.style.backgroundImage = `url('${item.img}')`;
					photoItem.querySelector('h5').innerHTML = 'about';
					photoItem.querySelector('p').innerHTML = item.descri;

					gallery.append(photoItem);
				});
				break;
			case 'branding':
				photosGallery[2].branding.map((item, index) => {
					let photoItem = document.querySelector('.photo').cloneNode(true);

					photoItem.style.backgroundImage = `url('${item.img}')`;
					photoItem.querySelector('h5').innerHTML = 'about';
					photoItem.querySelector('p').innerHTML = item.descri;

					gallery.append(photoItem);
				});
				break;
			case 'adverts':
				photosGallery[3].adverts.map((item, index) => {
					let photoItem = document.querySelector('.photo').cloneNode(true);

					photoItem.style.backgroundImage = `url('${item.img}')`;
					photoItem.querySelector('h5').innerHTML = 'about';
					photoItem.querySelector('p').innerHTML = item.descri;

					gallery.append(photoItem);
				});
				break;
			case 'development':
				photosGallery[4].development.map((item, index) => {
					let photoItem = document.querySelector('.photo').cloneNode(true);

					photoItem.style.backgroundImage = `url('${item.img}')`;
					photoItem.querySelector('h5').innerHTML = 'about';
					photoItem.querySelector('p').innerHTML = item.descri;

					gallery.append(photoItem);
				});
				break;
			default:
				break;
		}
	});
});

// More projects
let buttonMoreProjects = document.querySelector('.more-projects button');
buttonMoreProjects.addEventListener('click', () => {
	buttonMoreProjects.classList.toggle('active');
	if (buttonMoreProjects.classList.contains('active') == true) {
		buttonMoreProjects.textContent = 'less projects';
	} else {
		buttonMoreProjects.textContent = 'more projects';
		gallery.scrollTop = 0;
	}
	gallery.classList.toggle('active');
});

// maker card team

cardInfo.map((item, index) => {
	let cardModel = document.querySelector('.content-cards').cloneNode(true);
	cardModel.innerHTML = '';
	cardModel.setAttribute('data-key', `${index}`);
	if (index == 0) {
		item.cards1.forEach(item => {
			let card = document.querySelector('.cards-slider').cloneNode(true);
			card.querySelector('img').src = item.img;
			card.querySelector('h5').innerHTML = item.name;
			card.querySelector('span').innerHTML = item.descri;
			cardModel.append(card);
			document.querySelector('.slider-width-team').appendChild(cardModel);
		});
	}
	if (index == 1) {
		item.cards2.forEach(item => {
			let card = document.querySelector('.cards-slider').cloneNode(true);
			card.querySelector('img').src = item.img;
			card.querySelector('h5').innerHTML = item.name;
			card.querySelector('span').innerHTML = item.descri;
			cardModel.append(card);
			document.querySelector('.slider-width-team').appendChild(cardModel);
		});
	}
	if (index == 2) {
		item.cards3.forEach(item => {
			let card = document.querySelector('.cards-slider').cloneNode(true);
			card.querySelector('img').src = item.img;
			card.querySelector('h5').innerHTML = item.name;
			card.querySelector('span').innerHTML = item.descri;
			cardModel.append(card);
			document.querySelector('.slider-width-team').appendChild(cardModel);
		});
	}
});

// dinamic quant span buttons card slider
let lenghtCards = document.querySelectorAll('.content-cards'),
	containerCardWidth = document.querySelector('.slider-width-team');

insertWidthContent(containerCardWidth, `${lenghtCards.length - 1}`, '%');
InsertButtonSpans(lenghtCards.length - 1, boxButtunCard);

let indexCard = 0;
function nextSliderCard() {
	document.querySelector('.button-slider-team span.active').classList.remove('active');
	if (indexCard == lenghtCards.length - 2) {
		indexCard = 0;
		containerCardWidth.style.marginLeft = `${indexCard}`;
	} else {
		indexCard++;
		containerCardWidth.style.marginLeft = `-${indexCard * 100}%`;
	}
	document.querySelectorAll('.button-slider-team span')[indexCard].classList.add('active');
}
let cardAuto = setInterval(nextSliderCard, 7000);

// manul slider card
document.querySelectorAll('.button-slider-team span').forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('.button-slider-team span.active').classList.remove('active');
		let marginValCard = `-${item.getAttribute('data-key') * 100}%`;
		containerCardWidth.style.marginLeft = marginValCard;
		e.target.classList.add('active');
		indexCard = item.getAttribute('data-key');
		clearInterval(cardAuto);
		cardAuto = setInterval(nextSliderCard, 7000);
	});
});

// happy client
let containerWidthHappy = document.querySelector('.slider-width-happy');
cardInfo[0].cards1.forEach((item, index) => {
	let cloneModelSliderHappy = document.querySelector('.content-happy-slider').cloneNode(true);
	cloneModelSliderHappy.querySelector('img').src = item.img;
	cloneModelSliderHappy.querySelector('h5').innerHTML = item.name;
	cloneModelSliderHappy.querySelector('span').innerHTML = item.descri;
	document.querySelector('.slider-width-happy').append(cloneModelSliderHappy);
});

let lenghtSlidersHappy = document.querySelectorAll('.content-happy-slider');
insertWidthContent(containerWidthHappy, lenghtSlidersHappy.length - 1, '%');
InsertButtonSpans(lenghtSlidersHappy.length - 1, boxButtunHappy);

// manual slider happy
document.querySelectorAll('.button-box-happy-clients span').forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('.button-box-happy-clients span.active').classList.remove('active');
		let marginValCard = `-${item.getAttribute('data-key') * 100}%`;
		containerWidthHappy.style.marginLeft = marginValCard;
		e.target.classList.add('active');
		indexCurrentHappy = item.getAttribute('data-key');
		clearInterval(happyAuto);
		happyAuto = setInterval(nextSliderHappy, 7000);
	});
});

// dinamic slider happy
let indexCurrentHappy = 0;
function nextSliderHappy() {
	document.querySelector('.button-box-happy-clients span.active').classList.remove('active');
	if (indexCurrentHappy == lenghtSlidersHappy.length - 2) {
		indexCurrentHappy = 0;
		containerWidthHappy.style.marginLeft = `${indexCurrentHappy}`;
	} else {
		indexCurrentHappy++;
		containerWidthHappy.style.marginLeft = `-${indexCurrentHappy * 100}%`;
	}
	document
		.querySelectorAll('.button-box-happy-clients span')
		[indexCurrentHappy].classList.add('active');
}
let happyAuto = setInterval(nextSliderHappy, 7000);

// last slider! uhuuuuuuuuuu

let indexCurrentProductsType = 0,
	lenghtSlidersProductsType = document.querySelectorAll('.content-slider-product-type').length;

// dinamic slider product type
function sliderAutoProductType() {
	document.querySelector('.bottons-box-price-products span.active').classList.remove('active');
	if (indexCurrentProductsType == lenghtSlidersProductsType - 1) {
		indexCurrentProductsType = 0;
		containerWidthProductsType.style.marginLeft = `${indexCurrentProductsType}`;
	} else {
		indexCurrentProductsType++;
		containerWidthProductsType.style.marginLeft = `-${indexCurrentProductsType * 100}%`;
	}
	document
		.querySelectorAll('.bottons-box-price-products span')
		[indexCurrentProductsType].classList.add('active');
}
// auto run slider Product  presents
let productTypeSliderAuto = setInterval(sliderAutoProductType, 7000);

// manual slider Product presents
document.querySelectorAll('.bottons-box-price-products span').forEach(item => {
	item.addEventListener('click', e => {
		document.querySelector('.bottons-box-price-products span.active').classList.remove('active');
		containerWidthProductsType.style.marginLeft = `-${item.getAttribute('data-key') * 100}%`;
		e.target.classList.add('active');
		indexCurrentProductsType = item.getAttribute('data-key');
		clearInterval(productTypeSliderAuto);
		productTypeSliderAuto = setInterval(sliderAutoProductType, 7000);
	});
});

// arroy up function
document.querySelector('.arroy-up').addEventListener('click', item => {
	window.scrollTo(window.scrollX, 0);
});
