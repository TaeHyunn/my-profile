import pluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        IntersectionObserver: 'readonly',
        localStorage: 'readonly',
        matchMedia: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
];
