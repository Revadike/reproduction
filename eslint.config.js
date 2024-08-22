import js from '@eslint/js'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.vue'],
    ignores: ['dist/*']
  }
)
