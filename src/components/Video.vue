<template>
	<div class="row">
		<div class="col s12 m6 l3">
			<div class="player" data-plyr-provider="youtube" v-bind:data-plyr-embed-id="`${video.id.videoId}`"></div>
		</div>
	</div>
</template>

<script>
	document.addEventListener('DOMContentLoaded', () => { 
		let players = Plyr.setup('.player');
		if(players) {
			window.player = player;
			function on(selector, type, callback) {
				document.querySelector(selector).addEventListener(type, callback, false);
			}
		}
	});
import Youtube from './youtube'

export default {
	data () {
		return {
			data: Youtube.methods.getVideoChanel(),
		}
	},
}
</script>