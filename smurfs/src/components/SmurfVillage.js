import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../store/actions";

const SmurfVillage = ({ getSmurf, smurfs, isFetching }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h2>Fetching your smurfs</h2>;
  }
  return (
    <div>
      <h3>Smurf Village</h3>
      {smurfs.map(smurf => {
        return (
          <div>
            <h1>{smurf.name}</h1>
            <h3>Age:{smurf.age}</h3>
            <h3>Height:{smurf.height}</h3>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfVillage);
