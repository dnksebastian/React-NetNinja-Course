import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, handleClose, isSalesModal }) {
  return createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
        <button
          onClick={handleClose}
          className={isSalesModal ? "sales-btn" : ""}
        >
          close
        </button>
      </div>
    </div>,
    document.body
  );
}