<template>
  <header>
    <router-link to="/">
    <div class="logo">
      <img src="@/assets/img/logo.jpg" alt="">
      <span>NameBlog</span>
    </div>
    </router-link>
    <ul class="link">
      <li><router-link to="/">Категории</router-link></li>
      <li><router-link to="'/about'">Блог</router-link></li>
      <li><router-link to="/">Профиль</router-link></li>
    </ul>
    <div class="login">
      <input type="text" placeholder="Найти...">
      <router-link to="/">Вход</router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
}

.logo{
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    border-radius: 50%;
    margin-right: 16px;
  }
  span{
    font-size: 20px;
  }
}

.login{
  display: flex;
  align-items: center;

  input{
    margin-right: 80px;
    padding: 10px 5px;
    border-radius: 5px;
    border: 2px solid #DADADA;


  }

  // И так сойдет

  &::before{
    display: flex;
    position: relative;
    left: 170px;
    content: "";
    width: 34px;
    height: 34px;
    margin-left: -34px;
    transform: scale(0.8);
    background: url("@/assets/img/search.svg");
    z-index: 1;
    transition: 0.1s;
  }

  &:hover::before{
    filter: opacity(0);
  }

}

a{
  font-size: 25px;
}

ul{
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-left: 15px;
}

li{
  display: flex;
  list-style: none;
  margin: 0 25px;
}

@media (max-width: 1500px) {
  .login{
    input{
      display: none;
    }
  }

  .link{
    display: none;
  }
}
</style>