window.addEventListener('load', function(){
	const Button = document.querySelector('.button')
	const Text = document.querySelector('.text')
	Button.style['background-color'] = 'blue'
	Button.style['color'] = 'white'

	function sayHi(name) {
		console.log('Hello '+name)
	}

	sayHi('Саша')

	let State = 'inactive'

	Button.addEventListener('click', function(){
		if(State == 'inactive'){
			Text.style['display'] = 'block'
			State = 'active'
			console.log(State)
		}else if(State == 'active'){
			Text.style['display'] = 'none'
			State = 'inactive'
			console.log(State)
		}
	})
	window.addEventListener('scroll', function(){
		if(window.scrollY >= 836 && window.scrollY <= 1000) {
			console.log('You are here!')
		}
	})

	const Input = document.querySelector('input')
	Input.addEventListener('focus', function(){
		Input.setAttribute('placeholder', '')
	})

})
