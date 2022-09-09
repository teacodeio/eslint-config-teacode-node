# eslint-config-teacode

For **Node**. To see for React version check [eslint-config-teacode](https://github.com/teacodeio/eslint-config-teacode.git#readme)

## Setup 

#### install:
```bash
npm i eslint-config-teacode-node -D

# or 

yarn add eslint-config-teacode-node -D
```


#### Add to `package.json`:
```json
{
  "prettier": "eslint-config-teacode-node/prettier",
  "devDependencies": {
    "eslint": "^7.0.0 || ^8.0.0",
    "eslint-config-teacode-node": "^1",
    "typescript": "*"
  }
}
```
Config require both `eslint` and  `typescript` to be installed.

#### Add `.eslintrc`:
```json
{
  "extends": ["eslint-config-teacode-node"]
}
```

## overriding
Both Prettier and Eslint rules might depend on developers preferences.
Instructions how to change prettier rules can be found [here](https://prettier.io/docs/en/configuration.html#sharing-configurations),
and eslint rules are easily modifiable by adding `rules` in `.eslintrc`.


