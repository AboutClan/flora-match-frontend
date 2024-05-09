module.exports = {
  root: true,
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",

    "prettier",
  ],
  ignorePatterns: [".eslintrc.cjs", "public", "*.config.ts"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error", // import 순서
    "simple-import-sort/exports": "error", // export 순서
    "@typescript-eslint/naming-convention": [
      // 네이밍 컨벤션
      "error",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "variable",
        leadingUnderscore: "allow",
      },
      {
        format: ["camelCase", "PascalCase"],
        selector: "function",
      },
      {
        format: ["PascalCase"],
        selector: "interface",
      },
      {
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "react/jsx-curly-brace-presence": [
      // props나 children 에 중괄호를 넣을건지 여부
      "error",
      {
        props: "never", // never: 불필요하면 안넣는다
        children: "never",
      },
    ],
    "react/function-component-definition": [
      // 함수 정의 컨벤션
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/no-default-export": "off", // default export 금지 설정
    "react/react-in-jsx-scope": "off", // jsx를 쓸 때 React가 scope 에 있어야 하는지 여부
    "react-hooks/exhaustive-deps": "off", // React Hook useEffect의 의존성 배열 검사 비활성화
  },
};
