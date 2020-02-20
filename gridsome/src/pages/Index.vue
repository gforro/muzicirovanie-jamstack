<template>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
<!--    <g-image alt="Example image" src="~/favicon.png" width="135" />-->

<!--    <h1>Hello, world!</h1>-->

<!--    <p>-->
<!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores-->
<!--    </p>-->

<!--    <p class="home-links">-->
<!--      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>-->
<!--      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>-->
<!--    </p>-->

    <div>
        <div class="container" v-html="$page.landing.content">
        </div>
        <hr class="is-invisible"/>
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half is-link" v-for="course in $page.courses.edges">
                    <la-card :title="course.node.title" :description="course.node.description" :image="course.node.image" :course-code="course.node.code" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
    query {
        courses: allMarkdown(filter: { id: { ne: "landing" } }, sortBy: "code", order: ASC) {
            edges {
                node {
                    title
                    description
                    code
                    image(width: 800, height: 600, quality: 90)
                }
            }
        }
        landing: markdown(id: "landing") {
            content
        }
    }
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
