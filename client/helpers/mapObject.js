// helper functions

//map over an object 
function mapObject(object, callback) {
	  return Object.keys(object).map(function (key) {
	    return callback(key, object[key]);
	  });
	}
// in return statement of component
{this.mapObject(this.props.menu, function (key, value) {
return <div key={key+value}> {key} : {value}</div>;
})}