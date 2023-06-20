const sertificateModal = () => {
	const sertificats = document.querySelectorAll('a > .img-responsive')
	const overlaySertificate = document.querySelectorAll('.document-overlay')

	const createModal = () => {
		const div = document.createElement('div')
		div.id = 'sertificat-modal'
		div.innerHTML = `
		<img class='sertificat-modal-img'>
		`
		
	}




	sertificats.forEach((sertificate) => {
		// console.log(sertificate)
	})
}

export default sertificateModal