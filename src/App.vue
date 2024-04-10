<!-- @format -->

<script>
import BagItemList from '@/components/BagItemList.vue'
import LibraryItemList from '@/components/LibraryItemList.vue'
import Bag from '@/models/Bag.js'

export default {
	components: { LibraryItemList, BagItemList },
	data() {
		return {
			userBag: new Bag(),
		}
	},
}
</script>

<template>
	<nav class="navbar bg-dark">
		<span class="navbar-brand text-light"><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
	</nav>

	<div class="container-fluid mt-3">
		<library-item-list :bag="userBag"></library-item-list>
		<bag-item-list :bag="userBag"></bag-item-list>
	</div>
</template>

<style scoped></style>
