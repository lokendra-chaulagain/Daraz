import React from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useDeleteBannerMutation, useGetAllBannersQuery } from "../../rtk/api/globalApi";
import moment from "moment";
import { DeleteToaster } from "../../helper/toast";
import TableHeading from "../TableHeading";
import AddBannerDialog from "./AddBannerDialog";

export default function BannerTable() {
  const { data: res } = useGetAllBannersQuery<any>();
  const banners = res && res.data;

  const [deleteBanner] = useDeleteBannerMutation();
  const handleBannerDelete = (id: string) => {
    DeleteToaster(deleteBanner, id, "Deleting banner...", "Banner deleted successfully", "Failed to delete banner");
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-4 ">
        <TableHeading heading={`All Banners`} />

        <input
          type="text"
          className="form-control w-50 custom_input_search"
          id="searchInput"
          placeholder="Search By Title"
        />

        <select
          className="form-select custom_input_search w-50"
          aria-label="Sort Select">
          <option
            value="latest"
            selected>
            Latest
          </option>
          <option value="oldest">Oldest</option>
        </select>

        <AddBannerDialog />
      </div>

      <div className="customCard mt-2 mb-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Banner Image</th>
              <th scope="col">Author</th>
              <th scope="col">Status</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">UpdatedAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners &&
              banners.map((banner: any, _id: string) => (
                <tr
                  key={_id}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">1</th>
                  <td>
                    <a
                      target="_blank"
                      className="d-flex "
                      href={banner.image}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={banner.image}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="img"
                        />
                      </div>
                    </a>
                  </td>
                  <td>{banner.author}</td>
                  <td>{banner.activeStatus}</td>
                  <td>{moment(banner.createdAt).fromNow()}</td>
                  <td>{moment(banner.updatedAt).fromNow()}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/banner/${banner._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <div>
                        <MdDelete
                          className="delete_button_icon"
                          onClick={() => handleBannerDelete(banner._id)}
                          aria-label="delete"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
