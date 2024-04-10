<!-- @format -->

<script>
import LibraryItem from '@/components/LibraryItem.vue'
import LibraryCollection from '@/models/LibraryCollection.js'
import { Album, Book, Movie } from '@/models/Media.js'

export default {
	name: 'LibraryItemList',
	components: { LibraryItem },
	props: {
		bag: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			library: new LibraryCollection()
				.add(new Book('Clean Code', 600))
				.add(new Movie('John Wick', 141))
				.add(new Movie('Lord of the Rings', 180))
				.add(new Book('1000 Miles Home', 345))
				.add(new Album('Random Access Memories', 'Daft Punk', 13))
				.add(new Album('The College Dropout', 'Kanye West', 16)),
		}
	},
	methods: {
		addToBag(item) {
			if (item.isAvailable()) {
				this.bag.addItem(item)
			} else {
				console.error('Item is not available to add to the bag')
			}
		},
		removeFromLibrary(item) {
			this.library.removeItem(item)
		},
		handleCheckout(item) {
			item.checkOut(this.checkoutName)
		},
	},
}
</script>

<template>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
		<div class="col" v-for="item in library">
			<library-item
				:item="item"
				@checkout="handleCheckout"
				@add-to-bag="addToBag"
				@remove="(item) => library.remove(item)"></library-item>
		</div>
	</div>
</template>

<style scoped></style>
