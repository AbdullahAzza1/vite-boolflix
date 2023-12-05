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
                <h2> name movies </h2>
                <p> original film movies </p>
                <p> language </p>
                <p> vote </p>
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