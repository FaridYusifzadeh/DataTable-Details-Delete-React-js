import React from "react";

import { Link } from "react-router-dom";

import "../assets/components/header.scss";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
