//Parse data gathered from osmosis into acceptable format for redis Hash data type

const ParseScrapedData = (req, res, next) => {
	console.log(req)
	let leng = data.length
	let result = [] 
	for(var i = 0; i < leng; i ++) { 
		let items = data[i].Data.replace(/\s+/g, " ")
		let parsedMenu = items.split(" ")
		result.push(parsedMenu)
	}
	console.log('results parse scraped data', result)
}

export default ParseScrapedData