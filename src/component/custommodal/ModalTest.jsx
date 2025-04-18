import CustomModal from "./CustomModal";
import { useState, useEffect } from "react";
export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleCloseModal() {
    setShowModalPopup((prev) => !prev);
  }

  function handlePopupModal() {
    setShowModalPopup((prev) => !prev);
  }
  return (
    <div>
      <button onClick={handlePopupModal}>Pop up Modal</button>
      {showModalPopup && (
        <CustomModal onClose={handleCloseModal} body={"This is Custom Body"} />
      )}
    </div>
  );
}
