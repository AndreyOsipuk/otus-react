import React from "react";
import { mount, render } from "enzyme";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld render check", () => {

  it("should render to static HTML", () => {
    expect(render(<HelloWorld name={'OTUS'} />).text()).toEqual("Hello OTUS");
  });
});
