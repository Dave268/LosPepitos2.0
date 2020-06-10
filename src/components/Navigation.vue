<template>
  <nav class="header">
    <div class="header__logo">
      <img
        src="../assets/images/logo/Logo_LosPepitos_Completmdpi.png"
        alt="Logo de lospepitos.org"
        srcset="../assets/images/logo/Logo_LosPepitos_Complet.svg"
      />
    </div>
    <div class="header__menu-icon"></div>
    <div class="header__menu-content">
      <ul class="header__menu-list">
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-home.svg" />Home
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-nous.svg" />Nous
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-projet.svg" />Notre Projet Ecolo
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-journal.svg" />Journal de Voyage
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-perles.svg" />Nos Petites Perles
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-photos.svg" />Photos
        </li>
        <li class="header__menu-list-item">
          <img src="../assets/images/icons/menu-contact.svg" />Contact
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style lang="postcss">
.header {
  background-color: var(--lightColor);
  display: flex;

  &__logo {
    width: 50%;
    margin: auto 10px;
  }
}

.header__menu-content {
  display: none;
}
</style>
