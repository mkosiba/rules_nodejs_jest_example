import { dependsOnFunctionA, dependsOnLoremIpsum } from '../moduleB';
import { functionA } from '../moduleA';

jest.mock('../moduleA', () => {
  return {
    functionA: jest.fn(() => 'functionA')
  }
});
jest.mock('lorem-ipsum', () => {
  return {
    loremIpsum: jest.fn(() => 'loremIpsum')
  }
});

test('dependsOnFunctionA', async () => {
  expect(dependsOnFunctionA()).toStrictEqual('functionA');
});

test('dependsOnLoremIpsum', async () => {
  expect(dependsOnLoremIpsum()).toStrictEqual('loremIpsum');
});

test('moduleA is mocked here but not in moduleB', async () => {
  expect(functionA()).toStrictEqual('functionA');
});