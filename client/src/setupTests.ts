// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import '@testing-library/jest-dom';
import { server } from 'mocks/server';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
