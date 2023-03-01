import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];

  return (
    <div className="footer_top_border d-flex align-items-center justify-content-between pb-3 pt-2 px-4 shadow-sm ">
      <Link href={"/"}>
        <div className={currentRoute === "" ? "footer_active" : "footer_not_active"}>
          <AiFillHome size={22} />
          <p>Home</p>
        </div>
      </Link>

      <Link href={"/message"}>
        <div className={currentRoute === "message" ? "footer_active" : "footer_not_active"}>
          <RiMessage2Fill size={22} />
          <p>Messages</p>
        </div>
      </Link>

      <Link href={"/cart"}>
        <div className={currentRoute === "cart" ? "footer_active" : "footer_not_active"}>
          <FaShoppingCart size={22} />
          <p>Cart</p>
        </div>
      </Link>

      <Link href={"/account"}>
        <div className={currentRoute === "account" ? "footer_active" : "footer_not_active"}>
          <FaUser size={22} />
          <p>Account</p>
        </div>
      </Link>
    </div>
  );
}
