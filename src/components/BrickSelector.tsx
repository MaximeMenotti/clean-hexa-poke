import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCurrentBrickIndex } from "../redux/content/contentSlice";

function BrickSelector() {
  const index = useSelector(
    (state: RootState) => state.content.currentBrickIndex
  );
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setCurrentBrickIndex(index + 1))}>
        +
      </button>
      <span>{index}</span>
      <button onClick={() => dispatch(setCurrentBrickIndex(index - 1))}>
        -
      </button>
    </>
  );
}

export default BrickSelector;
