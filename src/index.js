import timer from "./modules/timer";
import modal from "./modules/modal";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import sendForm from "./modules/sendForm";
import scrollAnimation from "./modules/scrollAnimation";



timer('7 July 2023')
modal()
slider({
	slides: document.querySelectorAll('.benefits__item'),
	buttonLeft:  document.querySelector(`.benefits__arrow--left`),
	buttonRight: document.querySelector(`.benefits__arrow--right`),
	viewSlidesCount: 3,
	wrapper: document.querySelector('.benefits-wrap')
})
console.log()
slider({
	slides: document.querySelector('#services').querySelectorAll('.col-md-12'),
	buttonLeft: document.querySelector('.services__arrow--right'),
	buttonRight: document.querySelector('.services__arrow--left'),
	viewSlidesCount: 2,
	wrapper: document.querySelector('#services').querySelector('.row')
})
calculator()
scrollAnimation()

const bodyWindow = document.querySelector('.okna')
const bodyBalconies = document.querySelector('.balkony')
const bodyKitchen = document.querySelector('.kuhni')

if(bodyWindow){
	sendForm({
		formBlock: document.querySelector('.okna').querySelector('#order_1').querySelector('.form-horizontal')
	})
	sendForm({
		formBlock: document.querySelector('.okna').querySelector('#order_2').querySelector('.form-horizontal')
		})
}
if(bodyBalconies){
	sendForm({
		formBlock: document.querySelector('.balkony').querySelector('#order_1').querySelector('.form-horizontal'),
		someElem: [
			{
				type: 'input',
				value: 'value',
				id: 'calc-total'
			}
		]
	})
	sendForm({
		formBlock: document.querySelector('.balkony').querySelector('#order_2').querySelector('.form-horizontal'),
		someElem: [
			{
				type: 'input',
				value: 'value',
				id: 'calc-total'
			}
		]
	})
}
if(bodyKitchen){
	sendForm({
		formBlock: document.querySelector('.kuhni').querySelector('#order_1').querySelector('.form-horizontal')
	})
	sendForm({
		formBlock: document.querySelector('.kuhni').querySelector('#order_2').querySelector('.form-horizontal')
	})
}





