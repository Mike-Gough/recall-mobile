module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/index.tsx",
    "!src/App.tsx",
    "!index.tsx",
    "!src/setupTests.ts",
    "!src/components/**/index.{ts,tsx}",
    "!src/components/**/*.stories.{ts,tsx}"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
