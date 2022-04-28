;(async function () {
	const result = await fetch(endpoint)
	const data = await result.json()
	const citis = data.map((city) => ({
		name: `${city.city}, ${city.state}`,
		population: city.population,
	}))

	const searchBar = document.querySelector('.search')
	const suggestions = document.querySelector('.suggestions')

	const handleSearch = (e) => {
		const elemStr = '<li><span class="name">{city}</span>{population}</li>'
		const value = e.target.value
		const regex = new RegExp(value, 'gi')
		const results = citis.filter((city) => city.name.match(regex))
		const outputElems = results
			.map(({ name, population }) => {
				const cityElem = name.replaceAll(regex, `<span class='hl'>${value}</span>`)
				const populcationElem = `<span class='population'>${(+population).toLocaleString()}</span>`

				const replacedElem = elemStr.replace('{city}', cityElem)
				return replacedElem.replace('{population}', populcationElem)
			})
			.join('')

		suggestions.innerHTML = outputElems
	}

	searchBar.addEventListener('input', handleSearch)
})()
