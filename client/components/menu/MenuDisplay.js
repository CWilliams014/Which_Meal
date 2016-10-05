import React from 'react'
import Entrees from './Entrees'

const MenuDisplay = React.createClass ({

	mapObject(object, callback) {
	  return Object.keys(object).map(function (key) {
	    return callback(key, object[key]);
	  });
	},
	render() {
		let menu = []
		console.log('MENU', menu)
		return (
			<div>
				{this.mapObject(this.props.menu, function (key, value) {
  				return <div key={key+value}> {key} : {value}</div>;
					})}
			</div>
		)
	}
})


export default MenuDisplay