<template>
  <div class="contactForm">
    <h1 class="footer__title">Contact</h1>
    <p class="invert-text">
      Si vous souhaitez nous contacter, n'hésitez pas à remplir le formulaire
      ci-dessous. Nous vous répondrons dans les meilleurs délais, compte tenu de
      notre accès à internet.
    </p>
    <!-- <p class="invert-text">
      Vous pouvez également consulter notre page facebook et nous y laisser un
      message ou nous contacter par e-mail: tourdumonde@lospepitos.org. Au
      plaisir de vous lire.
    </p> -->

    <form>
      <div class="form-control">
        <label for="userName">Nom:</label>
        <input type="text" name="userName" id="userName" />
      </div>
      <div class="form-control">
        <label for="subject">Sujet:</label>
        <input type="text" name="subject" id="subject" />
      </div>
      <div class="form-control">
        <label for="userMail">Adresse e-mail:</label>
        <input type="text" name="userMail" id="userMail" />
      </div>

      <div class="form-control">
        <label for="message">Votre message:</label>
        <textarea name="message" id="message" cols="30" rows="5"></textarea>
      </div>

      <div class="form-control">
        <button type="submit" class="submit-button">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
form {
  margin-top: 15px;
}

.form-control {
  margin-bottom: 10px;
  label {
    font-family: "Papyrus";
    font-weight: 100;
    font-size: 0.8rem;
  }

  input {
    display: block;
    width: 100%;
    border-radius: 5px;
    border: none;
    margin: 10px 0;
    padding: 7px;
    color: $darkColor;
    font-size: 0.7rem;
    letter-spacing: 0.1rem;

    &:focus {
      background-color: #053987;
      color: $lightColor;
      border: 1px solid $lightColor;
    }
  }

  textarea {
    width: 100%;
    border-radius: 5px;
    margin: 10px 0;
    padding: 7px;
    font-family: "Papyrus";
    font-size: 0.7rem;
    letter-spacing: 0.1rem;

    &:focus {
      background-color: #053987;
      color: $lightColor;
      border: 1px solid $lightColor;
    }
  }
}
.submit-button {
  display: block;
  font-family: "Papyrus";
  color: $lightColor;
  background-color: #053987;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  border: 1px solid $lightColor;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 0 auto;

  &:active {
    background-color: $lightColor;
    color: $darkColor;
  }
}
</style>
<style lang="scss" scoped>
p {
  margin: 5px 0;
  color: $lightColor;
  font-family: "papyrus";
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  line-height: 1rem;
  // text-align: center;
}
</style>
