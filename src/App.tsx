import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment } from "./redux/counter/counterSlice";

import PrettyJsonDisplay from "./components/PrettyJsonDisplay";
import { addBrick } from "./redux/content/contentSlice";
import UpdateFirstBrick from "./components/UpdateFirstBrick";
import BrickSelector from "./components/BrickSelector";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const content = useSelector((state: RootState) => state.content.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            dispatch(
              addBrick({
                id: "new",
                title: "",
                description: "",
                mediaList: [],
              })
            )
          }
        >
          add a brick
        </button>
        <BrickSelector />
        <UpdateFirstBrick />
      </div>
      <PrettyJsonDisplay data={content} />
    </div>
  );
}

export default App;
