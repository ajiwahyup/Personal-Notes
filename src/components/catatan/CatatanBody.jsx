import React from "react";
import { showFormattedDate } from "../../utils";

function CatatanBody({ title, createdAt, body }) {
  return (
    <div className="catatan-item__body">
      <h3 className="catatan-item__title">{title}</h3>
      <p className="catatan-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="catatan-item__body">{body}</p>
    </div>
  );
}

export default CatatanBody;
