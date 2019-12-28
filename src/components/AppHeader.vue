<template>
  <header class="header">
    <section class="header__background">
      <img
        src="https://images.unsplash.com/photo-1576014348818-da2d94117be3?fit=crop&w=1950&q=80"
        alt="Background"
      />
    </section>
    <section class="header__content">
      <h1>Win een buurtfeest!</h1>
      <h3>Doe mee met #ZegEensAllo en win!</h3>
      <router-link to="/doe-mee"
        ><v-button buttonStyle="-primary -cta">doe mee</v-button></router-link
      >
      <a href="#submissions"
        ><v-button buttonStyle="-text">Stem voor je wijk</v-button></a
      >
    </section>
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "AppHeader",
  components: {
    "v-button": Button
  }
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
.header {
  width: 100%;
  height: 100vh;

  &__background {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    position: absolute;
    top: 0;
    background: #00000095;
    color: #fdfdfd;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    h1 {
      font-size: 48px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    h3 {
      margin-top: 8px;
    }
  }
}
</style>
