import { createAsyncAction } from "redux-promise-middleware-actions";

export const getSongs = createAsyncAction("SONGS", async album_id => {
  const album = album_id ? `album_id=${album_id}&&` : "";
  const res = await fetch(`http://localhost:3001/songs?${album}`);
  return await res.json();
});
