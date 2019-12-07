import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbums = createAsyncAction("POSTS", async () => {
  const res = await fetch("http://localhost:3001/albums");
  return await res.json();
});
