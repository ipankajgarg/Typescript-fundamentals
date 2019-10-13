import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

//google;
const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
