<script>
export default {
    name: "AppMain",
    props: {
        info: Object
    },


}
</script>

<template>
    <main>
        <div class="card-wrapper">
            <div class="card">
                <img :src="store.image" alt="">

            </div>
        </div>
    </main>
</template>

<style scoped>
.card-wrapper {
    padding: 5px;
    width: calc(100%/4);
}

.card {
    padding: 1rem;
    background: maroon;
    color: rgb(255, 255, 255);
}
</style>