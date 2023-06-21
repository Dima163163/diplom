const sendForm = ({formBlock, someElem = [] }) => {
	const form = formBlock
	const statusBlock = document.createElement('div')
	const loadText = 'Загрузка...'
	const errorText = 'Ошибка...'
	const successText = 'Спасибо! Наш менеджер с вами свяжется!'

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

	const submitForm = () => {
			const formElements = form.querySelectorAll('input')
			const formData = new FormData(form)
			const formBody = {}


			formData.forEach((val, key) => {
				formBody[key] = val
			})

			statusBlock.textContent = loadText
			form.append(statusBlock)

			if(someElem) {
				someElem.forEach(elem => {
					const element = document.getElementById(elem.id)
					if(elem.type === 'input'){
						formBody[elem.id] = element.value
					}
				})
			}

				
			if(validate(formElements)) {
				sendData(formBody)
					.then(data => {
						statusBlock.textContent = successText
						formElements.forEach(input => {
							input.value = ''
						})
					}).catch(error => {
						statusBlock.textContent = errorText
					})
			} else {
				alert(`Данные не валидны!
Имя в формате: Иван или Ivan
Телефон в формате: +XXXXXXXXXXX`)
			}
	}

	try {
    if (!form) {
      throw new Error("Верните форму на место!");
    	}
    	form.addEventListener("submit", (e) => {
      	e.preventDefault();

      	submitForm();
    	});
  } catch (error) {
    console.log(error.message);
  }

}

export default sendForm