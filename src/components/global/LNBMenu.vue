<template>
  <ul class="menus">
    <li v-tooltip="`준비중입니다.`">
      <a href="#">
        <del>로그인</del>
      </a>
    </li>
    <li v-tooltip="`준비중입니다.`">
      <a href="#">
        <del>회원가입</del>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menus {
  li {
    a {
      display: inline-block;
      width: 100%;
      padding: 0.5em 1em;
    }

    &:hover {
      background: #eee;
      cursor: pointer;
    }
  }
}
</style>
