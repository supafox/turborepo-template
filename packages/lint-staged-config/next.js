/**
 * A custom lint-staged configuration for Next.js applications.
 *
 * @type {import("lint-staged").Config}
 */
export const nextJsConfig = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix --max-warnings=0',
  ],
  '*.{css,scss,md,mdx,json}': ['prettier --write'],
} 