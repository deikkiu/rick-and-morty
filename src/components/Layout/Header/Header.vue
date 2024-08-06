<template>
	<header class="bg-black">
		<div class="container">
			<div
				class="flex flex-row justify-between gap-x-10 sm:py-12 mm:py-10 mmm:py-8 py-6"
			>
				<router-link class="mm:block hidden" to="/">
					<img
						width="220"
						height="auto"
						src="@/assets/icons/logo.svg"
						alt="Rick and Morty"
					/>
				</router-link>

				<Menu />
			</div>
		</div>
	</header>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
	components: {
		Menu,
	},
};
</script>
