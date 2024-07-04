/* eslint-disable */
import { render } from "@testing-library/react";
import CardUniversity from "./CardUniversity";

test("renders university card with correct data", () => {
  const testData = {
    country: "USA",
    name: "Harvard University",
    alpha_two_code: "US", 

  };

  const { getByText } = render(<CardUniversity data={testData} />);
  
  expect(getByText(testData.name)).toBeInTheDocument();
  expect(getByText(testData.country)).toBeInTheDocument();
});