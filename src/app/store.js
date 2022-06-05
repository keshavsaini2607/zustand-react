import create from "zustand";
import courseSlice from "./functions";

const courseStore = (set, get) => ({
  ...courseSlice(set, get)
});


const useCourseStore = create(
    courseStore
)

export default useCourseStore;