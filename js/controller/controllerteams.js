import { get } from "https://jscroot.github.io/api/croot.js";
import { responseTeam} from "../config/config.js";
import { JSONTeams } from "../template/template.js";

get(JSONTeams, responseTeam);