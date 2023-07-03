import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateBrick } from "../redux/content/contentSlice";

function UpdateFirstBrick() {
  const brick = useSelector(
    (state: RootState) =>
      state.content.value.brickList[state.content.currentBrickIndex]
  );

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateBrick({ ...brick, title: event.target.value }));
  };

  return <input type="text" value={brick.title} onChange={handleChange} />;
}

export default UpdateFirstBrick;
