import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import slider from "./modules/slider";
import calculator from "./modules/calculator";
import sendForm from "./modules/sendForm";
import scrollAnimation from "./modules/scrollAnimation";
import sertificateModal from "./modules/sertificateModal";

timer('7 July 2023')
menu()
modal()
slider()
calculator()
scrollAnimation()
sertificateModal()
sendForm({
	formName: 'action-form',
	someElem: [
		{
			type: 'input',
			value: 'value',
			id: 'calc-total'
		}
	]
	})
sendForm({formName: 'action-form2'})
sendForm({formName: 'callback-form'})
sendForm({formName: 'application-form'})
