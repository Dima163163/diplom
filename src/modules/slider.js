const slider = ({ slides, buttonLeft, buttonRight, viewSlidesCount = 3, wrapper }) => {

	let currentIndex = 0;
	const width = document.documentElement.clientWidth;

	if(width <= 576) {
		viewSlidesCount = 1;
		wrapper.style.justifyContent = "center";
	}


	function showSliders() {
		slides.forEach(slide => {
			slide.style.display = 'none';
		})

		for(let i = 0; i < viewSlidesCount; i++) {
			const slideIndex = (currentIndex + i) % slides.length;
			slides[slideIndex].style.display = 'block';
		}
	}

	function nextSlide() {
		currentIndex += viewSlidesCount;
		showSliders();
	}

	function prevSlide() {
			currentIndex -= viewSlidesCount;
			if (currentIndex < 0) {
				currentIndex = slides.length - viewSlidesCount;
			}
			showSliders()
	}

	showSliders();

	buttonRight.addEventListener('click', nextSlide);
	buttonLeft.addEventListener('click', prevSlide);
}



export default slider
