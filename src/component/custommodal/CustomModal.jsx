import "./modal.css";

function CustomModal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="custom-modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            x
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">{body ? body : <p>Default Modal Body</p>}</div>

        <div className="footer">
          {footer ? footer : <h2>Default Modal footer</h2>}
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
