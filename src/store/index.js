import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const userInfo = ref(null)
  const token = ref('')

  // 方法
  function setUserInfo(info) {
    userInfo.value = info
  }

  function setToken(newToken) {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    }
    else {
      localStorage.removeItem('token')
    }
  }

  function logout() {
    userInfo.value = null
    token.value = ''
    localStorage.removeItem('token')
  }

  // 初始化
  function init() {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      token.value = savedToken
    }
  }

  return {
    userInfo,
    token,
    setUserInfo,
    setToken,
    logout,
    init,
  }
})
