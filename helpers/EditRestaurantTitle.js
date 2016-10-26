// takes restaurant name and fills spaces with '-' and removes apostrophes for scrape query and storing in Redis db
// i.e. "Carl's Jr" => "carls-jr"

const editRestaurantTitle = (name) => {
	let replaceWhiteSpaceWithDash = name.replace(/\s+/g, '-').toLowerCase();
	let removeApostrophe = replaceWhiteSpaceWithDash.replace(/'/g, "")
	return removeApostrophe
} 

export default editRestaurantTitle