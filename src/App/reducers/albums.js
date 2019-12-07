import { getAlbums } from "../actions/albums";

// Estado inicial
const initialState = {
  isLoading: false,
  albums: [],
  error: false
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getAlbums.pending):
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbums.fulfilled):
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false
      };
    case String(getAlbums.rejected):
      // Desactivamos la flag de carga y
      // activamos la de error
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
