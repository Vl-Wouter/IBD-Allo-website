<template>
  <form @submit.prevent="addEntryToDB" class="form">
    <section class="form__group" v-if="errors">
      <span :class="'alert -' + errors.level">{{ errors.message }}</span>
    </section>
    <section class="form__group -half">
      <label for="firstName">Voornaam</label>
      <input type="text" name="firstName" id="firstName" />
    </section>
    <section class="form__group -half">
      <label for="lastName">Naam</label>
      <input type="text" name="lastName" id="lastName" />
    </section>
    <section class="form__group -half">
      <label for="suburb">Wijk</label>
      <input type="text" name="suburb" id="suburb" />
    </section>
    <section class="form__group -half">
      <label for="email">E-mailadres</label>
      <input type="email" name="email" id="email" />
    </section>
    <section class="form__group">
      <label for="image">Link naar afbeelding</label>
      <input type="url" name="image" id="image" />
    </section>
    <section class="form__group -hidden">
      <input type="text" name="check" id="check" />
    </section>
    <section class="form__group">
      <v-button type="submit" class="btn -primary">Verstuur</v-button>
    </section>
  </form>
</template>

<script>
import Button from "./Button";
import { submissionsCollection } from "@/config/firebase";
export default {
  name: "EntryForm",
  components: {
    "v-button": Button
  },
  data: () => {
    return {
      errors: null
    };
  },
  methods: {
    validateForm(data) {
      for (let pair of data.entries()) {
        const [key, value] = pair;
        console.log(key, value);
        if (key === "check") {
          const hasValue = value ? true : false;
          if (hasValue) return false;
        } else {
          if (!value) return false;
        }
      }
      return true;
    },
    parseForm(input) {
      const output = {};
      for (let [key, value] of input.entries()) {
        if (key !== "check") {
          output[key] = value;
        }
      }
      return output;
    },
    addEntryToDB() {
      const form = document.querySelector("form");
      const data = new FormData(form);

      // Validate form
      if (!this.validateForm(data)) {
        this.errors = {
          level: "error",
          message: "Gelieve alle velden in te vullen"
        };
        return false;
      }

      const object = this.parseForm(data);
      object.votes = 0;
      submissionsCollection
        .add(object)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  &__group {
    flex: 0 0 100%;
    padding: 0 8px;
    box-sizing: border-box;
    text-align: left;
    margin: 8px 0;

    label {
      display: block;
    }
    input {
      display: block;
      padding: 8px 16px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #dbdbdb;
    }

    .alert {
      display: inline-block;
      box-sizing: border-box;
      padding: 8px 16px;
      width: 100%;
      &.-error {
        border-left: 4px solid rgb(119, 24, 24);
        background: rgb(255, 210, 210);
        color: rgb(119, 24, 24);
      }
    }

    &.-half {
      flex: 0 0 50%;
    }

    &.-hidden {
      display: none;
    }
  }
}
</style>
