import React from "react";
import BannerTable from "../../components/banner/BannerTable";
import Header from "../../components/Header";


export default function Banner() {
  return (
    <>
      <Header pageTitle={"Banner"} />
      <BannerTable />

      <div className="d-flex justify-content-end me-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link rounded-0 h6 next_prev_pagination">Previous</a>
            </li>

            <li className="page-item">
              <a className="page-link rounded-0 h6 next_prev_pagination ">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
