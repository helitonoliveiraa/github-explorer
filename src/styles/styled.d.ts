import 'styled-components';

import { light as lightTheme } from './themes';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     title: string;

//     colors: {
//       primary: string;

//       title: string;

//       background: string;
//     };
//   }
// }
