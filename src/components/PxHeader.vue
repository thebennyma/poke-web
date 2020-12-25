<template>
  <header>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__list__element">
          <img
            class="image"
            src="@/assets/icons/poke-icon.png"
            alt="Poke-Logo"
          />
        </li>

        <li class="menu__list__element">
          <a class="link" href="#">Poke</a>
        </li>

        <li class="menu__list__element">
          <a class="link" href="#">About</a>
        </li>

        <li class="menu__list__element">
          <a class="link" href="#">Help Us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style lang="scss" scoped>
.menu {
  &__list {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-column-gap: 1rem;
    align-items: center;

    &__element {
      padding: 0.5rem 0rem;
      list-style: none;

      .link,
      .image {
        cursor: pointer;
      }

      .link {
        font-weight: bold;
        text-decoration: none;
        color: #272727;
      }

      .link:hover {
        color: #ff6347;
      }

      .image {
        width: 2.5rem;
      }
    }

    &__element:last-child:hover {
      border: 1px solid #ff6347;
      cursor: pointer;
      a {
        color: #ff6347;
      }
    }

    &__element:last-child {
      padding: 0.5rem;
      margin-right: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #272727;
    }
    &__element:first-child {
      padding-left: 1rem;
    }
  }
}
</style>
