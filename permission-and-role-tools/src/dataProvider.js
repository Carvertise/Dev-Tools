import jsonServerProvider from "ra-data-json-server";
import fakeDataProvider from 'ra-data-fakerest';

import { TESTDATA } from './testData';



// export const dataProvider = fakeDataProvider(
//   {
//     posts: [
//         { id: 0, title: 'Hello, world!' },
//         { id: 1, title: 'FooBar' },
//     ]
//   }
// )

console.log(TESTDATA)

export const dataProvider = fakeDataProvider(
  {
    permissions: [
      TESTDATA[0],
    ]
  }
)