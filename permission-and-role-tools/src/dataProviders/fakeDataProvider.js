import jsonServerProvider from "ra-data-json-server";
import fakeDataProvider from 'ra-data-fakerest';

import { TESTUSERS } from '../data/testUsers';
import { TESTTASKS } from '../data/testTasks';



export const localDataProvider = fakeDataProvider(
  {
    users: 
      TESTUSERS,
    tasks: 
      TESTTASKS
  }
)