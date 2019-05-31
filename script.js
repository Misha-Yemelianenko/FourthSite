var slider = document.querySelector('.slider'),
	slides = document.querySelectorAll('.slide'),
	nextBTN = document.querySelector('.next'),
	prevBTN = document.querySelector('.prev'),
	people = document.querySelector('.people-name'),
	currentSlide = 3;

	


function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide active';
}

function prevSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide active';
}

nextBTN.addEventListener('click', nextSlide);
prevBTN.addEventListener('click', prevSlide);


function names(){
	if(slides[3].className = 'slide active'){
		people.innerHTML = 'Elen';
	}
}