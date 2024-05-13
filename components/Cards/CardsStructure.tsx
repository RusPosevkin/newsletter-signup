import React from 'react'
import { Card, FlexContainer, StyledLink } from "./CardsStyle";

const CardsStructure = () => {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about">About Page &rarr;</StyledLink>
      </Card>
    </FlexContainer>
  );
}

export default CardsStructure;