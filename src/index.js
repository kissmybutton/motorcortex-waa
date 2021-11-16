import WAA from "./Incidents/Effect";
import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: WAA,
      name: "WAA",
    },
  ],
};
