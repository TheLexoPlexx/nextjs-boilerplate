import React from "react";
import Link from "next/link";

export const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  {
    name: "Chart",
    path: "/chart",
  },
  {
    name: "Backtest",
    path: "/backtest",
  },
];

export default function NavItems() {
  return (
    <ul>
      {navLinks.map((link, index) => {
        return (
          <Link href={link.path}>
            <li key={index}>{link.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}