import React from "react";

export default function SortBy() {
  return (
    <div className="custom-select">
      <select name="s" id="">
        <option value="0">Sırala</option>
        <option value="1">Yeniden - Eskiye</option>
        <option value="2">Eskiden - Yeniye</option>
      </select>
    </div>
  );
}
