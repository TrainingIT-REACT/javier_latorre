import types from "../actions/types";

const initialState = {
  name: "Javi",
  usersDetails: [
    {
      userName: "Javi",
      fullName: "Javier Latorre",
      description: "Desarrollador de software, cantante y metalero",
      favoriteGenres: [
        "Celta",
        "Metal",
        "Rock",
        "Clasica",
        "Instrumental",
        "BSOs"
      ]
    },
    {
      userName: "User",
      fullName: "Usuario corriente",
      description: "",
      favoriteGenres: ["Reggaeton", "Pop"]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };
    case types.UPDATE_DETAILS:
      const {
        userName,
        fullName,
        description,
        favoriteGenres
      } = action.userDetails;
      const _userDetails = [...state.usersDetails]; // Avoid possible mutations
      const userDetailsWithoutUserNameToUpdate = _userDetails.filter(
        userD => userD.userName !== userName
      );
      const updatedUsersDetails = [
        ...userDetailsWithoutUserNameToUpdate,
        { userName, fullName, description, favoriteGenres }
      ];
      return {
        ...state,
        usersDetails: updatedUsersDetails
      };
    default:
      return state;
  }
};

export default reducer;
