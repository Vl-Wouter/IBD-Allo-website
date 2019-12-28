<template>
  <main class="card">
    <section class="card__image">
      <img :src="content.image" :alt="content.id" />
    </section>
    <section class="card__actions">
      <v-button
        @click.native="likePost(content.id, content.votes)"
        buttonStyle="-empty"
        v-if="likedLocal"
        ><fa-icon :icon="['fas', 'heart']"/></v-button
      ><v-button
        @click.native="likePost(content.id)"
        buttonStyle="-empty"
        v-else
        ><fa-icon :icon="['far', 'heart']"/></v-button
      >&nbsp;<span>{{ content.votes | likes }}</span>
    </section>
    <section class="card__content">
      <p class="bold">{{ content.firstName + " " + content.lastName }}</p>
      <p class="light">{{ content.suburb }}</p>
    </section>
  </main>
</template>

<script>
import Button from "./Button";
export default {
  name: "Card",
  props: {
    content: Object
  },
  components: {
    "v-button": Button
  },
  data: () => {
    return {
      likeText: "like"
    };
  },
  computed: {
    likedLocal() {
      return this.$store.getters.checkLiked(this.content.id);
    }
  },
  methods: {
    likePost() {
      const postData = {
        id: this.content.id,
        votes: this.content.votes
      };
      if (this.likedLocal) {
        this.$store.dispatch("removeFromLiked", postData);
      } else {
        this.$store.dispatch("addToLiked", postData);
      }
    }
  },
  filters: {
    likes(input) {
      if (input === 1) {
        return input + " like";
      } else {
        return input + " likes";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  box-shadow: 0 5px 10px #00000030;

  &__image {
    position: relative;
    &:before {
      content: "";
      display: block;
      $width: 100%;
      $height: percentage(1 / 1);

      width: $width;
      height: 0;
      padding-bottom: $height;
    }
    img {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }

  &__actions {
    background: #fbfbfb;
    text-align: left;
    padding: 4px 8px;
    color: #cf4d6f;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 4px 8px;
    background: #fff;

    p {
      margin: 0;

      &.bold {
        font-weight: 700;
      }

      &.light {
        color: #454545;
      }
    }
  }
}
</style>
