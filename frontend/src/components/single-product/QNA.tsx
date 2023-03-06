import Link from "next/link";
import React from "react";
import { RiQuestionnaireFill, RiQuestionAnswerFill } from "react-icons/ri";

export default function QNA() {
  return (
    <div className="bg_color_white px-2 mt-1 py-3">
      <div className=" d-flex align-items-center justify-content-between ">
        <p className="fz15 fw-semibold text-muted">Questions about this product (3)</p>
        <Link href={"/qna"}>
          <p className="fz12 color_orange">View All</p>
        </Link>
      </div>

      <div className="d-flex gap-2 pe-4 mt-3">
        <RiQuestionnaireFill
          className="color_orange"
          size={20}
        />
        <div>
          <p className="fz13">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, delectus?</p>
          <p className="fz11 text-muted">Lokendra Chaulagain . 26 sep 2023</p>
        </div>
      </div>

      <div className="d-flex gap-2 pe-4 mt-4">
        <RiQuestionAnswerFill
          className="color_grey"
          size={20}
        />
        <div>
          <p className="fz13">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, delectus?</p>
          <p className="fz11 text-muted">Fantech Company . answer within 9 hours</p>
        </div>
      </div>
      <hr />

      <Link href={"/qna"}>
        <p className="fz15 fw-semibold color_orange text-center">Ask Questions</p>
      </Link>
    </div>
  );
}
