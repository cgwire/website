<template>
    <div class="section content has-text-centered mt4">
        <NuxtPicture src="/images/404.png" width="900" format="webp" />

        <h1 class="mt4" v-if="error.statusCode === 404">
            The page you were looking for could not be found...
        </h1>
        <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
        <NuxtLink class="home-link" to="/">Go to home page</NuxtLink>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "error", // you can set a custom layout for the error page
};
</script>

<style scoped>
h1 {
    font-size: 1.8rem;
    font-weight: bold;
}

.home-link {
    font-weight: bold;
    font-size: 1.8rem;
}
</style>
