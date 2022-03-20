import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex">
      <nav>
        <Link to={"/films"}>
          <a className="mx-2 opacity-90 hover:opacity-100" href="/">
            Films
          </a>
        </Link>

        <a className="mx-2 opacity-90 hover:opacity-100" href="/">
          TV Shows
        </a>

        <a className="mx-2 opacity-90 hover:opacity-100" href="/">
          People
        </a>
      </nav>
    </div>
  );
}
