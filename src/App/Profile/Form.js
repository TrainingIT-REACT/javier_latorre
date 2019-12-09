import React from "react";

// Css
import "./Profile.css";

const Form = ({ favoriteGenres, description, fullName, updateFieldsState }) => {
  const handleOnChange = e => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      const updatedFavoriteGenres = checked
        ? [...favoriteGenres, value]
        : favoriteGenres.filter(genre => genre !== value);
      updateFieldsState(name, updatedFavoriteGenres);
    } else {
      updateFieldsState(name, value);
    }
  };

  return (
    <div className="form-container">
      <input
        className="fullName-field"
        name="fullName"
        type="text"
        placeholder="Nombre usuario"
        value={fullName}
        onChange={handleOnChange}
      />
      <br />
      <textarea
        className="description-field"
        name="description"
        type="text"
        placeholder="Algo sobre tí..."
        value={description}
        onChange={handleOnChange}
      />
      <br />
      <fieldset>
        <legend>Géneros favoritos</legend>
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Rap")}
          type="checkbox"
          name="favoriteGenres"
          value="Rap"
        />
        Rap
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Reggaeton")}
          type="checkbox"
          name="favoriteGenres"
          value="Reggaeton"
        />
        Reggaeton
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Trap")}
          type="checkbox"
          name="favoriteGenres"
          value="Trap"
        />
        Trap
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Pop")}
          type="checkbox"
          name="favoriteGenres"
          value="Pop"
        />
        Pop
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Rock")}
          type="checkbox"
          name="favoriteGenres"
          value="Rock"
        />
        Rock
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Metal")}
          type="checkbox"
          name="favoriteGenres"
          value="Metal"
        />
        Metal
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Folk")}
          type="checkbox"
          name="favoriteGenres"
          value="Folk"
        />
        Folk
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Blues")}
          type="checkbox"
          name="favoriteGenres"
          value="Blues"
        />
        Blues
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Clasica")}
          type="checkbox"
          name="favoriteGenres"
          value="Clasica"
        />
        Clasica
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Instrumental")}
          type="checkbox"
          name="favoriteGenres"
          value="Instrumental"
        />
        Instrumental
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("BSOs")}
          type="checkbox"
          name="favoriteGenres"
          value="BSOs"
        />
        BSOs
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Indie")}
          type="checkbox"
          name="favoriteGenres"
          value="Indie"
        />
        Indie
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Jazz")}
          type="checkbox"
          name="favoriteGenres"
          value="Jazz"
        />
        Jazz
        <br />
        <input
          onChange={handleOnChange}
          checked={favoriteGenres.includes("Otro")}
          type="checkbox"
          name="favoriteGenres"
          value="Otro"
        />
        Otro
        <br />
      </fieldset>
    </div>
  );
};

export default Form;
