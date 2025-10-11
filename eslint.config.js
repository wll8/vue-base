import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  ignores: [
    'mm/**/*',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-debugger': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
