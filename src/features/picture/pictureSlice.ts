import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type PictureName } from "../../components/layout/ProductPicture/ProductPicture";

export interface Picture {
  name: PictureName;
  alt: string;
}

interface PictureState {
  selectedPicture: Picture;
}

const initialState: PictureState = {
  selectedPicture: {
    name: "product1",
    alt: "Brown and grey/white shoes against an orange and light tan backdrop.",
  },
};

const pictureSlice = createSlice({
  name: "picture",
  initialState,
  reducers: {
    selectPictureByName(state, action: PayloadAction<PictureName>) {
      // Convert thumbnail name to main picture name
      const mainPictureName = action.payload.replace(
        "Thumbnail",
        ""
      ) as PictureName;
      state.selectedPicture = {
        name: mainPictureName,
        alt: `Product image ${mainPictureName.slice(-1)}`,
      };
    },
  },
});

export const { selectPictureByName } = pictureSlice.actions;
export default pictureSlice.reducer;
