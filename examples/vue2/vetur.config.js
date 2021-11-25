/** @type {import('vls').VeturConfig} */
module.exports = {
  projects: [
    {
      root: './',
      // snippetFolder: './.vscode/vetur/snippets'
      // snippetFolder: './dist/json'
      // **optional** default: `[]`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // It is relative to root property.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      globalComponents: [
        './src/components/**/*.vue'
        // {
        //   // Component name
        //   name: 'FakeButton',
        //   // Component file path, please use '/'.
        //   path: './src/app/components/AppButton.vue'
        // }
      ]
    }
  ]
}
