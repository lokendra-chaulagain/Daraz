import React from "react";
import { IoIosSquare } from "react-icons/io";

export default function HighlightsAndDescription() {
  return (
    <div className="bg_color_white px-2">
      <div>
        <p className="fz14 fw-semibold text-muted">Highlights</p>
        <hr className="my-2" />

        <div className="d-flex align-items-center gap-2 mb-1">
          <IoIosSquare size={9} />
          <p className="fz13"> Cash on Delivery Available</p>
        </div>

        <div className="d-flex align-items-center gap-2 mb-1">
          <IoIosSquare size={9} />
          <p className="fz13"> Cash on Delivery Available</p>
        </div>

        <div className="d-flex align-items-center gap-2 mb-1">
          <IoIosSquare size={9} />
          <p className="fz13"> Cash on Delivery Available</p>
        </div>

        <div className="d-flex align-items-center gap-2 mb-1">
          <IoIosSquare size={9} />
          <p className="fz13"> Cash on Delivery Available</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="fz14 fw-semibold text-muted">Description</p>
        <hr className="my-2" />

        <p className="fz13">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi cumque ullam assumenda? Repudiandae praesentium, at expedita saepe delectus ad deserunt nulla mollitia, facilis iusto incidunt! Sed pariatur, perspiciatis, debitis recusandae magni aut nulla consequatur aliquid nobis porro dolor cumque, officiis tempora esse deserunt odio dolorum ea nihil voluptate perferendis fuga fugit temporibus eaque voluptatibus! Optio ipsum pariatur voluptatem quos placeat provident porro
          perspiciatis dolores in, adipisci architecto repellendus sit maiores quas, neque nobis! Totam, incidunt excepturi! Nihil officia et, maxime autem quod esse totam quam magnam adipisci. Libero repellat reprehenderit maiores iste ut quam ab cupiditate ratione illum architecto.
        </p>
      </div>
    </div>
  );
}
