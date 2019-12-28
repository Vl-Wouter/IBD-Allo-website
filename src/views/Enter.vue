<template>
  <main>
    <section>
      <router-link to="/"
        ><fa-icon icon="arrow-left" /> Terug naar inzendingen</router-link
      >
    </section>
    <h1>Doe mee met de wedstrijd</h1>
    <p>
      Meedoen met deze wedstrijd is super-gemakkelijk! Weet je toevallig waar
      het bruist van verschillende culturen in je wijk? Ken je iemand die
      geweldig eten van zijn thuisland maakt? Het enige dat je moet doen is via
      het formulier een foto insturen die volledig in het thema van Allo! past.
    </p>
    <h2>Hoe werkt de rest dan?</h2>
    <p>
      De rest hangt af van het publiek. Je inzending zal op de homepage te zien
      zijn, waar mensen kunnen stemmen. De inzending met de meeste stemmen op
      het einde van de periode wordt gecontacteerd via het emailadres dat
      hij/zij heeft opgegeven.
    </p>
    <h2>Overtuigd? Geef dan hier je gegevens in!</h2>
    <entry-form />
  </main>
</template>

<script>
import EntryForm from "@/components/EntryForm";
export default {
  name: "Enter",
  components: {
    EntryForm
  }
};
</script>

<style lang="scss" scoped>
@keyframes arrow-left {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-50%);
  }
  20% {
    transform: translateX(0);
  }
}

main {
  section {
    text-align: left;
    padding: 32px 0;
  }
  a {
    text-decoration: none;
    color: #cf4d6f;
    font-weight: 700;

    &:visited {
      color: #cf4d6f;
    }

    &:hover {
      svg {
        animation-name: arrow-left;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }

  width: 60%;
  margin: 0 auto;
}
</style>
