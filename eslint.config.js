// @ts-check

import eslint from '@eslint/js';
// @ts-ignore
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "dist"
    ]
  }
);