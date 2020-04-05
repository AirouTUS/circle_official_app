<template lang="pug">
  a.sns_icon(:href="src")
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

<style lang="sass">
	.sns_icon
		font-size: 24px
		margin: 0 24px
		&:visited
			color: #42210b
</style>