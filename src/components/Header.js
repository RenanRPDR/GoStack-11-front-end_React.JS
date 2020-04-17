import React from 'react';

// Também é possível declarar dessa forma
// export default function Header();
function Header({ title}) {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
};

export default Header;