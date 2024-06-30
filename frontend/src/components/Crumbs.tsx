import React from "react";

import InternalLink from "./InternalLink";

export default function Crumbs(props: {
  crumbs: { to: string; label: string }[];
}) {
  return (
    <nav className="flex flex-wrap">
      {props.crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.to}>
          {index > 0 && <span className="mx-1">/</span>}
          <InternalLink to={crumb.to}>{crumb.label}</InternalLink>
        </React.Fragment>
      ))}
    </nav>
  );
}
