import styled from "styled-components";
import { FC } from "react";

export interface IUniversity {
  country: string;
  name: string;
}
const CardStyled = styled.div`
  background-color: orange;
  height:40px;
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <title>{data.name}</title>
    <span>{data.country}</span>
  </CardStyled>
);

export default CardUniversity;
