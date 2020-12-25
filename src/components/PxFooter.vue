<template>
  <footer>
    <div class="footer">
      <div class="footer__links">
        <a href="#"><img src="@/assets/icons/github-icon.svg" alt="github"/></a>
        <a href="#"
          ><img src="@/assets/icons/twitter-icon.svg" alt="twitter"
        /></a>
        <a href="#"
          ><img src="@/assets/icons/help-us-icon.svg" alt="help us"
        /></a>
      </div>
      <div class="footer__created">
        <span
          >❮❯ by <small>Marco Alvarado</small>,
          <small>Juan Santos</small> 2020</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-page",
};
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  text-align: center;
  background: rgb(32, 35, 41);
  padding: 4.5rem 0px;
  font-weight: bold;
  color: rgb(158, 158, 158);
  font-size: 1rem;
  &__links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: max-content;
    grid-column-gap: 1rem;
    justify-self: center;
  }
  &__created {
    span > small {
      color: #fff;
      font-size: 1rem;
    }
  }
  a > img {
    width: 2rem;
  }
}
</style>
