<template lang="pug">
  a.sns_icon(:href="src" target="_blank" rel="noopener")
    b-icon(:pack="pack" :icon="icon" custom-class="faa-wrench animated-hover")
</template>

<script>
export default {
	props: {
		src: {
			type: String
		},
		pack: {
			type: String
		},
		icon: {
			type: String
		}
	}
}
</script>

<style lang="sass" scoped>
	.sns_icon
		font-size: 24px
		margin: 0 24px
</style>