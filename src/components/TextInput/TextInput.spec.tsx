import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextInput from ".";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();

    render(<TextInput handleInputChange={fn} searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe("testando");
  });

  it("should call handleInputChange function on each key pressed", () => {
    const fn = jest.fn();

    render(<TextInput handleInputChange={fn} searchValue={"um valor qualquer"}/>);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe("um valor qualquer");
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleInputChange={fn} searchValue={""}/>);

    expect(container).toMatchSnapshot();
  });
});
