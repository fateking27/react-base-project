const Action = (value) => {
  return {
    type: "increment",
    payload: value,
  };
};

const Action_ = (value) => {
  return {
    type: "decrement",
    payload: value,
  };
};

export { Action, Action_ };
