<template>
  <div class="article">
    <div class="article__top">
      <div class="article__top__title"><h2>Nos derniers jours en Birmanie et Bilan</h2></div>
      <div class="article__top__gradient"></div>
    </div>
    <div class="article__bottom">
      <div class="article__bottom__summary"><p>Naypidaw, on a ADORE ! Hé oui, contre toute attente (on adore faire ce que les gens ne font pas), cette ville nous a tapés dans l'oeil. Nous l’avons traversée en voiture. Et.... elle était déserte. Assez impressionnant, comme dans les films de western ou de fin du monde (là où, vous savez, la végétation reprend le dessus sur les constructions bétonnées de l’homme ?) Et voici à tire larigot, des hôtels de luxe avec arbres et piscine sur le toit et joueur de violons dans le lobby, des hôtels en ruine (jamais terminés), des jardins toujours arrosés (!), aucune maison de villageois en bambou ou bois, aucune street-food (mais comment on va faire ? ! ?), une autoroute à 4 bandes (donc à 8 bandes dans les deux sens)... déserte.</p></div>
      <div class="article__bottom__date">
        <h6>- Posté le: 14 Déc 2019</h6>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.article {
  flex: 0 0 auto;
  margin: 25px;
  width: 280px;
  height: 280px;
  border: 1px $mainGrey;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 18px $mainGrey;

  &__top{
    height: 50%;
    background: radial-gradient(rgb(0,0,0,.33), rgb(0,0,0,.80)), url('../assets/images/articles/articleOne.png');
    border-radius: 5px 5px 0 0;
  }

  &__top__title{
    text-align: center;
    padding: 38px 20px;
  }

  &__bottom{
    height: 50%;
  }
  &__bottom__summary{
    text-overflow: ellipsis;
    overflow: hidden;
    height: 75px;
    margin: 15px 25px;
  }

  &__bottom__date{
    margin: 0 25px;
  }
}

// .article:first-of-type {
//   margin-left: 0px;
// }
// .article:last-of-type {
//   margin-right: 0px;
// }
</style>
