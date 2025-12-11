import { createPortal } from "react-dom";

const Modal = ({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText = "Conferma",
}) => {
  if (!show) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // evita che il click interno chiuda la modale
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Chiudi"
        >
          ×
        </button>

        <h2 className="modal-title">{title}</h2>

        <div className="modal-content">{content}</div>

        <div className="modal-actions">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Annulla
          </button>
          <button type="button" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
