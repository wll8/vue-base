<script setup>
defineProps({
  msg: {
    type: String,
    default: 'Hello Vue 3!',
  },
})
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      一个基于 Vue3 的基础框架,包含以下特性:
    </p>
    <ul>
      <li>
        <a href="https://cn.vuejs.org/" target="_blank" rel="noopener">Vue 3 文档</a>
      </li>
      <li>
        <a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">Vue Router</a>
      </li>
      <li>
        <a href="https://pinia.vuejs.org/zh/" target="_blank" rel="noopener">Pinia</a>
      </li>
      <li>
        <a href="https://axios-http.com/zh/" target="_blank" rel="noopener">Axios</a>
      </li>
      <li>
        <a href="https://lesscss.org/" target="_blank" rel="noopener">Less</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.hello {
  h1 {
    font-size: 2em;
    color: #42b983;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
