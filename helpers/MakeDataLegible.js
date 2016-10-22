// parse retreived osmosis data eliminating whitespace, and putting all information on each meal into individual array to be formatted by next piece of middleware

const makeDataLegible = (req, res, next) => {
	console.log('makeDataLegiblee')
	let reqInfo = req.restaurantMenu.menu
	var r = []
	for (let i = 0; i < reqInfo.length; i++) {
		// let restaurantFinalMenu = { 'id': i }
		let menuItems = reqInfo[i].Data.replace(/\s+/g, " ")
		let parsedMenu = menuItems.split(" ")
		let itemName = reqInfo[i].entreeName
		parsedMenu.unshift(itemName)
		r.push(parsedMenu)
	}
	req.parsedMenu = r
	req.restName = req.restaurantMenu.name
	next()
}


export default makeDataLegible 



