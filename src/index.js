import WAA from "./Incidents/Effect";
const { name, version } = require("../package.json");

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: WAA,
      name: "WAA",
    },
  ],
};
