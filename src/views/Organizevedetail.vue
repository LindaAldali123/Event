<template>
	<div class="orev">
		<AppHeader />
		<div class="clearfix"></div>
		<Orgev />
		<div class="clearfix"></div>
		<Footer />
		<div class="clearfix"></div>
		<End />
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import Orgev from '@/components/Orgev.vue';
import Footer from '@/components/Footer.vue';
import End from '@/components/End.vue';
export default {
	name: 'Organizevedetail',
	components: {
		AppHeader,
		Orgev,
		Footer,
		End,
	},
};
</script>
<style scoped>
.orev {
	overflow: hidden;
}
</style>
