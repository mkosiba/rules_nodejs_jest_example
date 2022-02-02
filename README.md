# rules_nodejs/jest import issue repro

Running `bazel test //...` results in the test failing due to `jest.mock` not mocking out the function (likely due to
import path issues).
Running `yarn jest --config jest.config.js` works fine.

