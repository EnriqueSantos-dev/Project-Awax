let containerSliderWidth = document.querySelector('.slider-width'),
    quantSliders = document.querySelectorAll('.slider'),
    sliderBottunBox = document.querySelector('.botoes-slider'),
    modelSpanButton = document.querySelectorAll('.botoes-slider span'),
    menuNav = document.querySelector('.menu nav'),
    menuLi = document.querySelectorAll('.menu nav ul li'),
    menuLinkActive = document.querySelectorAll('.menu nav ul li a'),
    gallery = document.querySelector('.grid-gallery--pics');

// menu active
menuLinkActive.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.menu nav ul li.active').classList.remove('active');
        menuLi[index].classList.add('active');
    });
});

// widht dinamic container sliders and buttons dinamic insert
containerSliderWidth.style.width = `${quantSliders.length * 100}vw`;
for (let i = 1; i < quantSliders.length; i++) {
    let span = document.createElement('span');
    span.setAttribute(`data-key`, `${i}`);
    sliderBottunBox.append(span);
}

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
