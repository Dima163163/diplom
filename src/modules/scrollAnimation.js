const scrollAnimation = () => {
	const anchor = document.querySelector('.smooth-scroll')
	const header = document.querySelector('#header')
	const nav = document.querySelector('#navigation')
	const offer = document.querySelector('#offer')

	anchor.style.display = 'none'
	const height = +header.offsetHeight + +nav.offsetHeight + +offer.offsetHeight

	
	window.addEventListener('scroll', () => {
		const scroll = document.documentElement.scrollTop

		if(scroll > height) {
			anchor.style.display = 'block'
		} else if (scroll < height) {
			anchor.style.display = 'none'
		}
	})
	
	anchor.addEventListener('click', function(e){
		e.preventDefault()
		header.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

export default scrollAnimation 