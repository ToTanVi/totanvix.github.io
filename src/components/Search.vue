<template>
	<nav style="margin-bottom: 15px;">
		<div class="nav-wrapper">
			<div class="input-field">
				<input id="search" type="search" required placeholder="Tìm kiếm" v-model="searchTerm" @input="searchTermChange">
				<label class="label-icon" for="search"><i class="material-icons">search</i></label>
				<i class="material-icons">close</i>
			</div>
		</div>
	</nav>
</template>
<script>
import _ from 'lodash';
export default {
	data() {
		return {
			searchTerm: null
		}
	},
	methods: {
		searchTermChange: _.debounce( function () {
		//  pass event up to parent App.vue
		this.$emit('termChange', this.searchTerm);
		}, 200)
	}
};
</script>