<!-- @format -->

<script>
import AlbumDetails from '@/components/AlbumDetails.vue'
import BookDetails from '@/components/BookDetails.vue'
import MovieDetails from '@/components/MovieDetails.vue'
export default {
	name: 'LibraryItem',
	components: { BookDetails, MovieDetails, AlbumDetails },
	props: {
		item: {
			type: Object,
		},
		removeItem: {
			type: Function,
		},
	},
}
</script>

<template>
	<div class="card h-100" :class="{ 'border-warning': !item.isAvailable() }">
		<div class="card-body">
			<!--                <component :is="typeOfItem" :item="item"></component>-->
			<component :is="item.constructor.detailsComponent" :item="item"></component>
			<div v-if="!item.isAvailable()" class="checked-out-by">Checked out by: {{ item.isCheckedOutBy }}</div>
		</div>
		<div class="card-footer d-flex justify-content-end">
			<button class="btn btn-outline-danger" @click="$emit('remove', item, userBag)">Remove Item</button>
			<button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
			<button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
			<button class="btn btn-outline-primary" @click="$emit('add-to-bag', item)">Add to Bag</button>
		</div>
	</div>
</template>

<style scoped></style>
