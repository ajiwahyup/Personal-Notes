import React from "react";
import CatatanBody from "./CatatanBody";
import ButtonDelete from "../button/ButtonDelete";
import ButtonArsipkan from "../button/ButtonArsipkan";

function CatatanItem({ title, createdAt, body, onDelete, onArsip, isArchived, id }) {
  return (
    <div className="catatan-item">
      <CatatanBody title={title} createdAt={createdAt} body={body} />
      <div className="catatan-item__button">
        <ButtonDelete id={id} onDelete={onDelete}/>
        <ButtonArsipkan id={id} onArsip={onArsip} isArchived={isArchived} />
      </div>
    </div>
  );
}

export default CatatanItem;
