import React from "react";
import { render, shallow } from "enzyme";

import Form from "../Form";

const favoriteGenres = ["Rock"];
const description = "Some description";
const fullName = "fullName";
const updateFieldsStateStub = jest.fn();

describe(Form, () => {
  describe("Render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = render(
        <Form
          favoriteGenres={favoriteGenres}
          description={description}
          fullName={fullName}
          updateFieldsState={updateFieldsStateStub}
        />
      );
    });

    it("should add the HTML elements", () => {
      expect(wrapper.is("div.form-container")).toBeTruthy();
      expect(wrapper.find("input.fullName-field").length).toBe(1);
      expect(wrapper.find("textarea.description-field").length).toBe(1);
      const fieldset = wrapper.find("fieldset");
      expect(fieldset.length).toBe(1);
      expect(fieldset.find("input").length).toBe(14);
    });

    it("should use fullname prop", () => {
      expect(wrapper.find("input.fullName-field")[0].attribs.value).toBe(
        fullName
      );
    });

    it("should use description prop", () => {
      expect(
        wrapper.find("textarea.description-field")[0].children[0].data
      ).toBe(description);
    });
  });

  describe("Features", () => {
    it("should call updateFieldsStateStub when clicking on a checkbox", () => {
      const wrapper = shallow(
        <Form
          favoriteGenres={favoriteGenres}
          description={description}
          fullName={fullName}
          updateFieldsState={updateFieldsStateStub}
        />
      );
      const fieldset = wrapper.find("fieldset");
      fieldset
        .find("input")
        .at(0)
        .simulate("change", {
          target: {
            name: "ea",
            value: "ea",
            checked: false,
            type: "checkbox"
          }
        });
      expect(updateFieldsStateStub).toHaveBeenCalled();
    });
  });
});
