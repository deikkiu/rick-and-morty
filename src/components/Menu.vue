<template>
	<nav class="flex flex-row gap-x-8">
		<Link name="Home" url="/" />
		<Link name="Episodes" url="/episodes" />
		<Link name="Locations" url="/locations" />
	</nav>
</template>

<script>
import Link from '@/shared/ui/Link.vue';

export default {
	props: {
		name: String,
	},
	components: {
		Link,
	},
};
</script>
