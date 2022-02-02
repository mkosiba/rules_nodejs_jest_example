import { functionA } from './moduleA';
import { loremIpsum } from 'lorem-ipsum';

export const dependsOnFunctionA = () => {
    return functionA()
};

export const dependsOnLoremIpsum = () => {
    return loremIpsum()
};
