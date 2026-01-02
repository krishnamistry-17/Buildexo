/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/__tests__/**/*.(test|spec).(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", 
    "\\.(svg|png|jpg|jpeg|gif|webp)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};
