import React from "react";
import CatatanItem from "./CatatanItem";

function CatatanList({ catatans, onDelete, onArsip }) {
  if (catatans.length === 0) {
    return <p className="catatan-list__message">Tidak ada catatan</p>;
  }
  return (
    <div className="catatan-list">
      {catatans.map((catatan) => (
        <CatatanItem
          key={catatan.id}
          id={catatan.id}
          onDelete={onDelete}
          onArsip={onArsip}
          isArchived={catatan.archived}
          {...catatan}
        />
      ))}
    </div>
  );
}

export default CatatanList;
