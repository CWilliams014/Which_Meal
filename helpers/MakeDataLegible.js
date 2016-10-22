//Parse data gathered from osmosis into acceptable format for redis Hash data type

//Json table component receiving the data will want each menu to an array of objects with nutrients and values

//e.x.
//HSET Arbys: Arbys Burger Deluxe calories 40 vitamin k 100
/* Arbys = {
	menu item: 'Arbys Burger Deluxe', 
	daily %: {
		vitamin k: 5
		vitamin C: 5
		sodium: 30,

	},
	Amount per serving: {
		calories: 40,
		vitamin K: 8,
		sodium: 30
		}
	}
	
}  */

const makeDataLegible = (req, res, next) => {
	console.log('makeDataLegiblee', req.restaurantMenu.menu)
	let reqInfo = req.restaurantMenu.menu
	var r = []
		for(let i = 0; i < reqInfo.length; i++) {
				// let restaurantFinalMenu = { 'id': i }
				let menuItems = reqInfo[i].Data.replace(/\s+/g, " ") 
				let parsedMenu =  menuItems.split(" ")
				let itemName = reqInfo[i].entreeName
				parsedMenu.unshift(itemName)
				r.push(parsedMenu)
				// req.parsedMenu = r
				
	  	}
	  	req.parsedMenu = r
  	// res.parsedMenu = r
  	next()
}


export default makeDataLegible 



