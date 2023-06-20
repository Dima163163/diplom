const sendForm = ({formName, someElem = [] }) => {
	const forms = document.getElementsByName(formName)
	const body = document.querySelector('body')

	const validate = (list) => {
		let success = true

		const namePattern = /[а-яёА-ЯЁa-zA-Z]/i;
    const phonePattern = /\+\d{10,16}/g;

		list.forEach(input => {
			if(input.name === 'fio'){
				if(!namePattern.test(input.value)){
					success = false
				}
			}
			if(input.name === 'phone'){
				if(phonePattern.test(input.value) !== true){
					success = false
				}
			}
		})
		return success
	}

	const sendData = (data) => {
			return fetch("https://jsonplaceholder.typicode.com/posts", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json"
				},
			}).then(res => res.json)
	}


	forms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault()

			const formElements = form.querySelectorAll('input')
			const formData = new FormData(form)
			const formBody = {}
			formData.forEach((val, key) => {
				formBody[key] = val
			})

			if(body.classList.contains("balkony")) {
				someElem.forEach(elem => {
					const element = document.getElementById(elem.id)
					console.log(element)
					if(elem.type === 'input'){
						formBody[elem.id] = element.value
					}
				})
			}
	
				if(validate(formElements)) {
					sendData(formBody)
						.then(data => {
							formElements.forEach(input => {
								input.value = ''
							})
						}).catch(error => console.log(error))
				} else {
					alert(`Данные не валидны!
Имя в формате: Иван или Ivan
Телефон в формате: +XXXXXXXXXXX`)
				}


		
		})
	})
}

export default sendForm