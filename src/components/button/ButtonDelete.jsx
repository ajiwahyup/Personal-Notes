import React from "react";

function ButtonDelete({ id, onDelete }) {
  return (
    <button className="catatan-item__delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default ButtonDelete;
