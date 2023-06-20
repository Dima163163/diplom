const calculator = () => {
	const calcBlock = document.getElementById('calc')
	const calcType = document.getElementById('calc-type')
	const calcTypeMaterial = document.getElementById('calc-type-material')
	const calcSquare = document.getElementById('calc-input')
	const total = document.getElementById('calc-total')


	const validate = function () {
		this.value = this.value.replace(/\D/g, '')
	}


	const countCalc = () => {
		let totalValue = 0
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
		let calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
		const calcSquareValue = +calcSquare.value

		if(calcTypeMaterial.value == '--'){
			calcTypeMaterialValue = 1
		}
		
		if(calcType.value != '--' && calcSquare.value) {
			totalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue
			total.value = totalValue
		} else {
			totalValue = ''
			total.placeholder = 'Итого'
		}
	}

	if(calcBlock) {
		calcBlock.addEventListener('input', (e) => {
				if(
					e.target === calcType ||
					e.target === calcTypeMaterial ||
					e.target === calcSquare) {
						countCalc()
					}
		})
	}

}

export default calculator