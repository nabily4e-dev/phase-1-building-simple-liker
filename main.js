// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.querySelectorAll('.like-glyph')
for (let heart of emptyHearts) {
	heart.addEventListener('click', function () {
		mimicServerCall()
			.then(function (response) {
				heart.classList.add('activated-heart')
				heart.textContent = FULL_HEART
			})
			.catch(function (error) {
				const modal = document.getElementById('modal')
				modal.classList.remove('hidden')
				modal.textContent = error
				setTimeout(function () {
					modal.classList.add('hidden')
				}, 3000)
			})
	})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2
			if (isRandomFailure) {
				reject('Random server error. Try again.')
			} else {
				resolve('Pretend remote server notified of action!')
			}
		}, 300)
	})
}
