/** @format */

export class Album {
	static type = 'Album'
	static detailsComponent = 'AlbumDetails'

	title
	artist
	trackCount

	constructor(title, artist, trackCount) {
		this.title = title
		this.artist = artist
		this.trackCount = trackCount
	}
}
