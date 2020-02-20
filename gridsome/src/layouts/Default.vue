<template>
  <div>
    <section class="hero gradientBg">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Muzicírovanie
          </h1>
          <h2 class="subtitle">
            Hudba pre deti
          </h2>
        </div>
      </div>
    </section>
    <main class="section">
      <slot />
    </main>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('mounted');
    },
    updated() {
      console.log('updated')
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
