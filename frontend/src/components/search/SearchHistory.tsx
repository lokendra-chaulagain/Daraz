import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function SearchHistory() {
  const handleClearSearch = () => {
    console.log("History Cleared");
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-3">
        <h6>Search History</h6>
        <RiDeleteBinLine
          size={20}
          onClick={handleClearSearch}
          className="cursor_pointer"
        />
      </div>
      <div className="font_small d-flex flex-wrap gap-2">
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">msi monitor 27 inch</p>
        <p className="search_history_item rounded-pill">Lorem ipsum dolor sit amet.</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
        <p className="search_history_item rounded-pill">mobile phone</p>
      </div>
    </div>
  );
}
