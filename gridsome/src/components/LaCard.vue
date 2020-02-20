<template>
    <div class="card" :style="{height: '100%', display: 'flex', flexDirection: 'column'}">
        <div class="card-image">
            <figure class="image">
                <g-image :src="image" :alt="imageAlt" />
            </figure>
        </div>
        <div class="card-content"  :style="{marginBottom: 'auto'}">
        <h1 class="title">{{title}}</h1>
        <div class="content">
            {{description}}
        </div>
        </div>
        <div class="card-footer">
            <g-link :to="`/course/${courseCode}`" class="card-footer-item has-background-primary has-text-white">Vybrať</g-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LaCard",
        props: {
            image: Object,
            imageAlt: String,
            title: String,
            description: String,
            courseCode: String
        }
    }
</script>

<style scoped>

</style>
