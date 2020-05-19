import React from "react";
// import ReactDOM from 'react-dom';
import Enzyme, { shallow,mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { act } from 'react-dom/test-utils';

import App from "./App";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});
test("renders counter display", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = mount(<App />);
  const button = wrapper.find('button')
  // button.simulate('click');
  // const initialCounterState = wrapper.state('counter');
  // console.log(initialCounterState)
  // expect(submitButton.prop('disabled')).toBeTruthy();
  act(() => button.prop('onClick')());
  button.update();
  // console.log(button.debug())
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  console.log(counterDisplay)
});
// test("counter starts at 0", () => {});
// test("click button increments counter display", () => {});
