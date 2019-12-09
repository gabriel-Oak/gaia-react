import { ReactElement } from "react";
import { shallow } from "enzyme";

export const configureShallow = (Component: ReactElement) => shallow(
    Component
).childAt(0).dive();
