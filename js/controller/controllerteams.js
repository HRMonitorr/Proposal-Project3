import { get } from "https://jscroot.github.io/api/croot.js";
import { ResponseRofi, responseTeam} from "../config/config.js";
import { JSONTeams, JSONrofi } from "../template/template.js";

get(JSONTeams, responseTeam);
get(JSONrofi, ResponseRofi);