<template>
  <main>
    <app-header />
    <section id="submissions">
      <h2>Stem hier voor je favoriete inzending</h2>
      <card-container />
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader";
import CardContainer from "@/components/CardContainer";

export default {
  name: "home",
  components: {
    AppHeader,
    CardContainer
  },
  created() {
    this.$store.dispatch("getLiked");
  }
};
</script>
