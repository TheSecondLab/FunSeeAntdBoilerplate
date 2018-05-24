
import { smart, CRUD } from 'funsee-smart';
import * as schema from './schema';

export default smart({
  moduleName: 'subClaimSearch',
  schema
})(CRUD);
