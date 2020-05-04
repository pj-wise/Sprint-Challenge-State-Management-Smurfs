import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../store/actions";

const NewSmurfForm = props => {
  const initialState = {
    name: "",
    age: undefined,
    height: "",
    id: undefined
  };

  const [smurfPop, setSmurfPop] = useState(initialState);

  const submitHandler = e => {
    e.preventDefault();
    setSmurfPop({ ...smurfPop, id: Date.now() });
    props.addSmurf(smurfPop);
    setSmurfPop(initialState);
  };

  const changeHandler = e => {
    setSmurfPop({ ...smurfPop, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a Smurf</h2>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          name='name'
          value={smurfPop.name}
          placeholder="Smurf's Name"
        />
        <input
          onChange={changeHandler}
          name='age'
          value={smurfPop.age}
          placeholder='Age'
        />
        <input
          onChange={changeHandler}
          name='height'
          value={smurfPop.height}
          placeholder='Height'
        />
        <button>Add to Smurf Village</button>
      </form>
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
  { addSmurf }
)(NewSmurfForm);
