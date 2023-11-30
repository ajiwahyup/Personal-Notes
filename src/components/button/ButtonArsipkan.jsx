import React from "react";

function ButtonArsipkan({ id, onArsip, isArchived }) {
  return (
    <button className="catatan-item__arsip" onClick={() => onArsip(id)}>
      {isArchived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ButtonArsipkan;
