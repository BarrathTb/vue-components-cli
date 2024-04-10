<!-- @format -->

<template>
	<div class="album">
		<h3 class="card-title">{{ item.title }}</h3>
		<p v-if="item.artist" class="card-text">Artist: {{ item.artist }}</p>
		<p v-if="item.trackCount" class="card-text">Tracks: {{ item.trackCount }}</p>
	</div>
</template>

<script>
import { Album } from '@/models/Media.js'

export default {
	name: 'AlbumDetails',
	props: {
		item: {
			type: Album,
		},
	},
}
</script>

<style scoped></style>
