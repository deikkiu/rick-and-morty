<script setup>
import Menu from '@/components/Menu.vue';
</script>

<template>
	<header class="bg-black">
		<div class="container">
			<div class="flex flex-row justify-between gap-x-5 py-12">
				<router-link to="/">
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
