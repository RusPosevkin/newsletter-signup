import React from 'react'
import Link from 'next/link';
import { HeaderContainer } from "./HeaderStyle";

const HeaderStructure = () => {

  return (
    <HeaderContainer>
      <Link href="/">Shop</Link>
    </HeaderContainer>
  );
}

export default HeaderStructure;
