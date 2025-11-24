import './src/styles/global.css';

// Set the public path for Module Federation at runtime
/* eslint-disable no-undef */
if (typeof window !== 'undefined') {
  // @ts-ignore
  __webpack_public_path__ = 'http://localhost:9001/';
}
/* eslint-enable no-undef */
