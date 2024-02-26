import { configureStore } from "@reduxjs/toolkit";

import featureContentSlice from "./featureContentSlice";

export const store = configureStore({
    reducer: featureContentSlice,
});
