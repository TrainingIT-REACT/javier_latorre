import { createAsyncAction } from "redux-promise-middleware-actions";

export const getAlbums = createAsyncAction("ALBUMS", async album_id => {
  const album = album_id ? `id=${album_id}&&` : "";
  const res = await fetch(`http://localhost:3001/albums?${album}`);
  return await res.json();
});
