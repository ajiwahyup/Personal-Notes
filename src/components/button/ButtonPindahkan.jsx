import React from "react";

function ButtonPindahkan({ id, onPindah }) {
  return (
    <button className="catatan-item__pindah" onClick={() => onPindah(id)}>
      Pindahkan
    </button>
  );
}

export default ButtonPindahkan;
