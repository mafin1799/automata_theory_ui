import React from 'react';

function SocialLinksItem({ link, icon }) {
  return (
    <li className="list-inline-item mx-2">
      <a href={link}><i className={`bi ${icon} fs-2 text-bauman-2`}></i></a>
    </li>
  );
}

export default SocialLinksItem;