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
