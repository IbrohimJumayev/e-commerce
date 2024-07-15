import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aside from "./Aside";

const ProductsList = ({ products, loading, brandsLoading, brands, colors }) => {
  return (
    <div className="flex gap-5">
      <Aside brands={brands} colors={colors} />
      <p className="absolute top-1/3 left-1/2">
        {loading && (
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </p>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 flex-1">
        {products.map((p) => {
          return (
            <li
              className="list-none w-full flex flex-col  p-5 relative group"
              key={p.id}
            >
              <div className="flex flex-col justify-between h-full">
                <Link to={`/products/${p.id}`}>
                  <div>
                    <img className="w-full" src={p.image_url} alt={p.name} />
                  </div>
                </Link>

                <div className="mt-auto">
                  <Link to={`/products/${p.id}`}>
                    <div className="flex gap-2">
                      <h2 className="font-bold">{p.name}</h2>
                      <p className="text-gray-500 font-bold">{`(${p.brand_name})`}</p>
                    </div>
                  </Link>

                  <p className="font-light text-sm mb-2">{p.description}</p>
                  <strong className="mb-2">${p.price}</strong>
                  <div className="flex gap-2 mt-3">
                    {p.color_options.map((c, index) => {
                      return (
                        <span
                          key={index}
                          style={{ background: c }}
                          className="rounded-full border-2 w-5 h-5 px-4 py-4 "
                        >
                          {c.color_options}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-5">
                    <button className="mt-2 bg-gray-500 hover:scale-x-90 hover:bg-gray-700 text-white px-4 py-3 rounded w-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
