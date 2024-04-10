/** @format */

function Book(title, pages) {
	this.title = title
	this.pages = pages
}
Book.type = 'Book'
Book.detailsComponent = 'BookDetails'

class Movie {
	static type = 'Movie'
	static detailsComponent = 'MovieDetails'

	title
	runtime
	constructor(title, runtime) {
		this.title = title
		this.runtime = runtime
	}
}

class Album {
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

export { Album, Book, Movie }
