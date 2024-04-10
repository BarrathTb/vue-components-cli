/** @format */

import LibraryItem from '@/models/LibraryItem.js'
export default function LibraryCollection(arr = []) {
	// composition
	// this.items = []

	arr.add = function (media) {
		this.push(new LibraryItem(media))

		// return this for chaining
		return this
	}

	arr.remove = function (item) {
		this.splice(this.indexOf(item), 1)

		return this
	}
	arr.find = function (predicate) {
		return this.find(predicate)
	}
	arr.filter = function (predicate) {
		return this.filter(predicate)
	}

	return arr
}
