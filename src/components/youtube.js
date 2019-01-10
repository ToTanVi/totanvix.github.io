const API = 'AIzaSyDQ6mW6mB1ArvIz1csXTbtGM8ujoOE6fJQ';
$.ajaxSetup({
	async: false
});
export default {
	data () {
		return {
			'api': API
		}
	},
	methods: {
		getVideoChanel () {
			let url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCwmurIyZ6FHyVPtKppe_2_A&maxResults=8&key=${API}`;
			let dataVideo;
			$.getJSON(url, function(data) {
				dataVideo = data.items;
			});
			return dataVideo;
		},
		getVideo (id) {
			let url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${API}`;
			let video;
			$.getJSON(url, function(data) {
				video = data;
			});
			return video;
		},
		getVideoTrending () {
			let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=VN&maxResults=25&key=${API}`
			let dataVideo;
			$.getJSON(url, function(data) {
				dataVideo = data.items;
			});
			return dataVideo;
		},
		getVideoComment(id) {
			let url = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API}&textFormat=plainText&part=snippet&videoId=${id}`
			let comments;
			$.getJSON(url, function(data) {
				comments = data.items;
			});
			return comments;
		}
	},
}