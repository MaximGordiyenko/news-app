import React from "react";
import Link from "next/link";
import {Nav} from "../style/global";

const Navigation = () => {
  return (
    <Nav>
      <Link href={'/business'}><a>Business</a></Link>
      <Link href={'/technology'}><a>Technology</a></Link>
    </Nav>
  )
}

export default Navigation;
