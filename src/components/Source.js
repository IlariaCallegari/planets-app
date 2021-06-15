import React from "react";
import useStyles from "../styles/main-style";
function Source({ view, overview, structure, geology }) {
    const {sourceLink} = useStyles();
  return (
    <React.Fragment>
      {view === "overview" && (
        <a href={`${overview.source}`} className={sourceLink} target="blank">
          Source: <span>Wikipedia</span>
        </a>
      )}
      {view === "structure" && (
        <a href={`${structure.source}`} className={sourceLink} target="blank">
          Source: <span>Wikipedia</span>
        </a>
      )}
      {view === "geology" && (
        <a href={`${geology.source}`} className={sourceLink} target="blank">
          Source: <span>Wikipedia</span>
        </a>
      )}
    </React.Fragment>
  );
}

export default Source;
