<template>
  <div class="help-us">
    <h1 class="help-us__title">Pokemon Api</h1>
    <div class="help-us__information">
      <p class="help">
        Help me keep this page online for people who use this website!
      </p>
      <p class="text">
        This website is being used by many users and our infrastructure is too
        small to maintain so many connections
      </p>
      <p class="text">For this reason, we are asking for your help.</p>
      <p class="text">Thanks!</p>
    </div>
    <div class="help-us__button" @click.prevent="message()">
      <img src="@/assets/icons/coffee-icon.svg" alt="coffe" />
      <button>Give me a coffee</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "help-us",
  methods: {
    message() {
      alert("Coming Soon");
    },
  },
};
</script>

<style lang="scss" scoped>
.help-us {
  display: grid;
  grid-row-gap: 1rem;
  height: min-content;
  padding: 5rem 25%;
  &__title {
    color: #272727;
    font-size: 36px;
    font-weight: bold;
  }

  &__information {
    display: grid;
    grid-row-gap: 1rem;
    letter-spacing: 0.02em;
    .help {
      font-weight: 600;
    }
  }

  &__button {
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-column-gap: 0.5rem;

    cursor: pointer;
    padding: 0.5rem 1rem;
    background: #202329;
    border-radius: 1rem;
    width: max-content;

    button {
      border: none;
      background: #20232f;
      cursor: pointer;
      pointer-events: none;
      color: #fff;
      font-weight: bold;
    }

    img {
      width: rem(32px);
    }
  }

  &__button:hover {
    button {
      color: #ff6347;
    }
  }
}

@media screen and (max-width: 800px) {
  .help-us {
    padding: 5rem 10%;
  }
}
</style>
