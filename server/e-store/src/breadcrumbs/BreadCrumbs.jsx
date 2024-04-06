import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  let breadcrumbPath='';

  return (
    <div className="flex items-center text-gray-500 text-lg">
      <Link to="/" className="hover:text-gray-700">
        Home
      </Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={breadcrumbPath} className="mx-2">
            /
            {isLast ? (
              <span className="ml-2">{name}</span>
            ):(
              <Link to={breadcrumbPath} className="hover:text-gray-700 ml-2">
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
