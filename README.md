# @pika/pack Experiment

This was an experiment to understand and use `@pika/pack`.

tl;dr


It was an attempt to properly distribute some React components, and apollo graphql setup modules.

The two web examples: web-simple, and web-preact are straight from the original docs.

The `lib-simple` was the real experiment, which finally worked after I adjusted my `.babelrc` to:

```json
{
  "presets": [
    "@babel/preset-react"
  ],
  "env": {
    "test": {
      "presets": ["@babel/preset-env"],
    }
  }
}
```

Testing out:

- <https://github.com/pikapkg/web>
- <https://github.com/pikapkg/pack>

## Pika web walkthrough

In an existing pure web project:

```bash
npm install --save-dev @pika/web
npx @pika/web # === npm run prepare
```
