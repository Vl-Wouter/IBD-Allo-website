<template>
  <main>
    <section v-if="loading"><fa-icon icon="spinner" spin /></section>
    <section v-else class="cards">
      <div v-for="sub in submissions" :key="sub.id" class="card-space">
        <card :content="sub" />
      </div>
    </section>
  </main>
</template>

<script>
import { submissionsCollection } from "@/config/firebase";
import Card from "./Card";
export default {
  name: "CardContainer",
  components: {
    Card
  },
  data: () => {
    return {
      loading: false
    };
  },
  computed: {
    submissions() {
      return this.$store.state.submissions;
    }
  },

  created() {
    this.loading = true;
    submissionsCollection.onSnapshot(querySnapshot => {
      let submissions = [];
      querySnapshot.forEach(doc => {
        let submission = doc.data();
        submission.id = doc.id;
        submissions.push(submission);
      });
      this.$store.commit("setSubmissions", submissions);
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.cards {
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  margin: 32px auto;
  justify-content: center;

  .card-space {
    flex: 0 0 33.333%;
    padding: 0 16px;
    margin: 16px 0;
    box-sizing: border-box;
  }
}
</style>
