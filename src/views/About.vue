<script setup>
</script>

<template>
  <div class="about">
    <div class="container">
      <h1>关于页面</h1>

      <div class="info">
        <h2>项目信息</h2>
        <ul>
          <li><strong>项目名称:</strong> vue3-base</li>
          <li><strong>版本:</strong> 0.1.0</li>
          <li><strong>框架:</strong> Vue 3</li>
        </ul>
      </div>

      <div class="tech-stack">
        <h2>技术栈</h2>
        <div class="tech-list">
          <div class="tech-item">
            <h3>Vue 3</h3>
            <p>渐进式 JavaScript 框架</p>
          </div>
          <div class="tech-item">
            <h3>Vue Router</h3>
            <p>官方路由管理器</p>
          </div>
          <div class="tech-item">
            <h3>Pinia</h3>
            <p>新一代状态管理工具</p>
          </div>
          <div class="tech-item">
            <h3>Axios</h3>
            <p>基于 Promise 的 HTTP 客户端</p>
          </div>
          <div class="tech-item">
            <h3>Less</h3>
            <p>CSS 预处理器</p>
          </div>
          <div class="tech-item">
            <h3>Vite</h3>
            <p>下一代前端构建工具</p>
          </div>
        </div>
      </div>

      <div class="actions">
        <router-link to="/" class="back-btn">
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  font-size: 3em;
  color: white;
  margin-bottom: 40px;
}

.info, .tech-stack {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  h2 {
    color: #f5576c;
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      strong {
        color: #f5576c;
      }
    }
  }
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.tech-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  h3 {
    color: #f5576c;
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
}

.actions {
  text-align: center;

  .back-btn {
    display: inline-block;
    padding: 12px 40px;
    background: white;
    color: #f5576c;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s;

    &:hover {
      background: #f0f0f0;
      transform: translateY(-2px);
    }
  }
}
</style>
