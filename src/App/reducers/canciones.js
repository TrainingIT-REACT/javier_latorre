import { getSongs } from "../actions/canciones";

// Estado inicial
const initialState = {
  isLoading: false,
  canciones: [],
  error: false
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getSongs.pending):
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getSongs.fulfilled):
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        canciones: action.payload,
        error: false
      };
    case String(getSongs.rejected):
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
