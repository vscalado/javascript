var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Benner']

function listaVingadores() {

	var ul = document.getElementById('avangers')
	ul.innerHTML = ''

	avengers.forEach(function (a) {
		var li = document.createElement('li')
		var text = document.createTextNode(a)
		li.appendChild(text)
		ul.appendChild(li)
	})
}