import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Media = {
  id: string;
};

type Brick = {
  id: string;
  title: string;
  description: string;
  mediaList: Media[];
};

type Content = {
  id: string;
  brickList: Brick[];
};

export interface ContentState {
  currentBrickIndex: number;
  value: Content;
}

const initialBrick: Brick = {
  id: "1",
  title: "",
  description: "",
  mediaList: [],
};

const initialState: ContentState = {
  currentBrickIndex: 0,
  value: { id: "dummy_content", brickList: [initialBrick] },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addBrick: (state, action: PayloadAction<Brick>) => {
      state.value.brickList.push(action.payload);
    },
    updateBrick: (state, action: PayloadAction<Brick>) => {
      state.value.brickList[state.currentBrickIndex] = action.payload;
    },
    updateMedia: (
      state,
      action: PayloadAction<{ mediaId: string; media: Media }>
    ) => {
      state.value.brickList[state.currentBrickIndex].mediaList[0] =
        action.payload.media;
    },
    setCurrentBrickIndex: (state, action: PayloadAction<number>) => {
      state.currentBrickIndex = Math.min(
        Math.max(action.payload, 0),
        state.value.brickList.length
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBrick, updateBrick, setCurrentBrickIndex, updateMedia } =
  contentSlice.actions;

export default contentSlice.reducer;
