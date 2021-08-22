import { User } from './User';
import { Company } from './Company';

// import { map } from 'faker/lib/locales/it/name/first_name';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
