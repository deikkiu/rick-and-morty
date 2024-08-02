<template>
	<div
		class="bg-cardBg p-4 rounded-2xl cursor-pointer transition-colors linear hover:bg-cardHoverBg"
	>
		<img class="w-full h-48 rounded-lg" :src="item.image" :alt="item.name" />

		<h3 class="mt-4 text-base font-bold text-white">{{ item.name }}</h3>

		<div class="mt-4">
			<div
				v-if="item.status !== 'unknown'"
				class="flex flex-row items-center gap-x-1"
			>
				<template v-if="item.status === 'Alive'">
					<img
						class="w-4 h-auto"
						src="@/assets/icons/alive.svg"
						:alt="item.status"
					/>
				</template>
				<template v-if="item.status === 'Dead'">
					<img
						class="w-4 h-auto"
						src="@/assets/icons/dead.svg"
						:alt="item.status"
					/>
				</template>

				<p class="text-base text-white truncate">{{ item.status }}</p>
			</div>

			<div
				v-if="item.species !== 'unknown'"
				class="flex flex-row items-center gap-x-1"
			>
				<img
					class="w-4 h-auto"
					src="@/assets/icons/type.svg"
					:alt="item.species"
				/>

				<p class="text-base text-white truncate">{{ item.species }}</p>
			</div>

			<div
				v-if="item.gender !== 'unknown'"
				class="flex flex-row items-center gap-x-1"
			>
				<img
					class="w-4 h-auto"
					src="@/assets/icons/gender.svg"
					:alt="item.gender"
				/>

				<p class="text-base text-white truncate">{{ item.gender }}</p>
			</div>

			<div
				v-if="item.origin.name !== 'unknown'"
				class="flex flex-row items-center gap-x-1"
			>
				<img
					class="w-4 h-auto"
					src="@/assets/icons/location.svg"
					:alt="item.gender"
				/>

				<p class="text-base text-white truncate">{{ item.origin?.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
// const { url, name, status, species, gender, origin, image } = item;
// const { place, url } = origin;

export default {
	props: {
		item: Object,
	},
};
</script>
