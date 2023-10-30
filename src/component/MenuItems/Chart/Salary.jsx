import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action, Action_ } from "../../../redux/action/Action";
import { Action2 } from "../../../redux/action/Action2";

export default function Salary() {
  const reduxData = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    console.log("reduxData", reduxData);
  }, []);

  //在组件中调用dispatch派发action
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(Action2(5));
  };
  const changeUser = () => {
    dispatch(Action_(10));
  };

  return (
    <div>
      <h3>Salary</h3>
      <p>{JSON.stringify(reduxData.RD2)}</p>
      <button onClick={increment}>++</button>
      <p>{reduxData.RD.count}</p>
      <button onClick={changeUser}>修改</button>
    </div>
  );
}
