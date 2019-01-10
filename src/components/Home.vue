<template>
	<div class="container">
		 <div class="row" style="margin-top: 35px;">
			<div class="col s9" style="margin-bottom: 35px;">
				<Search @termChange="videoSearch($event)" />
				<vue-plyr ref="player">
					<div data-plyr-provider="youtube" :data-plyr-embed-id="videos[0].id.videoId"></div>
				</vue-plyr>
				<h4>Bình luận</h4>
				<ul class="collection" v-for="comment in comments" :key="comment.id">
					<li class="collection-item avatar">
						<img v-bind:src="comment.snippet.topLevelComment.snippet.authorProfileImageUrl" class="circle">
						<span class="title">{{ comment.snippet.topLevelComment.snippet.authorDisplayName }}</span>
						<p>{{ comment.snippet.topLevelComment.snippet.textDisplay }}</p>
					</li>
				</ul>
			</div>
			<div class="col s3">
				<ul class="collection" v-for="video in videos" :key="video.id.videoId">
					<li class="collection-item avatar">
						<img v-bind:src="video.snippet.thumbnails.medium.url" v-on:click="playVideo(video.id.videoId)" class="circle">
						<span class="title" v-on:click="playVideo(video.id.videoId)">{{ video.snippet.title }}</span>
						<a href="#!" class="secondary-content"><i class="material-icons" v-on:click="playVideo(video.id.videoId)">play_circle_outline</i></a>
					</li>
				</ul>
			</div>
    	</div>
	</div>
</template>

<style>
	img:hover, .card-title, .title {
		cursor: pointer;
	}
	.collection .collection-item.avatar .secondary-content {
		top: 18px;
		left: 24px;
		color: #fff
	}
</style>

<script>

import Youtube from './youtube';
import Search from './Search';
import YouTubeSearch from 'youtube-api-search';
export default {
	data () {
		return {
			video: null,
			videos: Youtube.methods.getVideoChanel(),
			comments: Youtube.methods.getVideoComment(Youtube.methods.getVideoChanel()[0].id.videoId),
		}
	},
	components: {
		'Search': Search,
	},
	computed: {
		player () { return this.$refs.player.player }
	},
	methods: {
		playVideo (id) {
			this.player.source = {
				type: 'video',
				sources: [
					{
						src: id,
						provider: 'youtube',
					},
				],
			};
			this.player.on('ready', event => {
				this.player.play();
				this.comments = Youtube.methods.getVideoComment(id);
			});
		},
		videoSearch(searchTerm) {
			YouTubeSearch( {key: Youtube.data().api, term: searchTerm, maxResults: 8}, (videos) => {
				this.videos = videos;
				// get the first video (before one is selected --this is the default)
				this.selectedVideo = videos[0];
			});
		}
	},
}
</script>