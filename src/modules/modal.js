const modal = () => {
	const popupBtn = document.querySelector('.button > .fancyboxModal')
	const modal = document.querySelector('.header-modal')
	const overlayModal = document.querySelector('.overlay')
	const popupClose = document.querySelector('.header-modal__close')
	const blockBody = document.querySelector('body')
	const documents = document.querySelectorAll('.sertificate-document');
	const imageModal = modal.cloneNode(true);
	const btnSevices = document.querySelectorAll('.service-button')
	const modalServices = document.querySelector('.services-modal')

	const createModal = (image) => {
		const some = image.split('images')[1];
		imageModal.querySelector('#callback').innerHTML = `<img src=images${some} class="img-responsive" />`;
		imageModal.classList.add('image-modal')
		return imageModal;
	}

	imageModal.querySelector('#callback').innerHTML = '';
	blockBody.appendChild(imageModal)
	imageModal.querySelector('.fancybox-inner').style.height = 'auto'

	documents.forEach(doc => {
		doc.addEventListener('click', (e) => {
			e.preventDefault();
			const clone = createModal(doc.href)
			openModal(clone, overlayModal)
		})
	})

	const openModal = (modalElem, overlayElem) => {
		modalElem.style.display = 'block'
		overlayElem.style.display = 'block'
	}

	const closeModal = (modalElem, overlayElem) => {
		modalElem.style.display = 'none'
		overlayElem.style.display = 'none'
	}

	popupBtn.addEventListener('click', () => {
		openModal(modal, overlayModal)
	})

	btnSevices.forEach(btn => {
		btn.addEventListener('click', () => {
			openModal(modalServices, overlayModal)
		})
	})

	blockBody.addEventListener('click', (e) => {
		if(e.target.closest(".overlay") || e.target.closest('.header-modal__close')){
			closeModal(modal, overlayModal)
		}

		if(e.target.closest(".overlay") || e.target.closest('.services-modal__close')){
			closeModal(modalServices, overlayModal)
		}
		
		if(e.target.closest(".overlay") || e.target.closest('.header-modal__close')){
			closeModal(imageModal, overlayModal)
		}
	})
}
export default modal
