import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import NewMeetupForm from "./NewMeetupForm";

describe("<NewMeetupForm />", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewMeetupForm />
      </MemoryRouter>
    );
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("updates form fields correctly", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewMeetupForm />
      </MemoryRouter>
    );

    wrapper
      .find("input#title")
      .simulate("change", { target: { id: "title", value: "Test Meetup" } });
    expect(wrapper.find("input#title").prop("value")).toBe("Test Meetup");

    wrapper
      .find("input#image")
      .simulate("change", {
        target: { id: "image", value: "https://example.com/image.jpg" },
      });
    expect(wrapper.find("input#image").prop("value")).toBe(
      "https://example.com/image.jpg"
    );

    wrapper
      .find("input#address")
      .simulate("change", {
        target: { id: "address", value: "123 Fake Street" },
      });
    expect(wrapper.find("input#address").prop("value")).toBe("123 Fake Street");

    wrapper
      .find("textarea#description")
      .simulate("change", {
        target: { id: "description", value: "This is a test meetup." },
      });
    expect(wrapper.find("textarea#description").prop("value")).toBe(
      "This is a test meetup."
    );
  });
});
