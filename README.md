[![CD](https://github.com/ymat19/ymat19.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/ymat19/ymat19.github.io/actions/workflows/main.yml)

# お勉強用

## メモ

- インデックスシグネチャ

```ts
interface Status {
  [parameter: string]: number;
}
```

- vite-tsconfig-paths
  Viteで非相対インポートをするために必要

- 型定義
  - interface
    - extendsできる
    - 重複宣言でマージされる
  - type
    - ユニオン型, 交差型が使える

- Range風
  - `[...Array(3).keys()]`
