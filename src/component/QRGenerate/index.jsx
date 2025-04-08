import QRCode from "react-qr-code";

import { useState } from "react";
function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState("");

  const [input, setInput] = useState("");

  function generateQRCode() {
    setQrValue(input);
    setInput("");
    return;
  }
  return (
    <div>
      <h2>QR Code Generator</h2>

      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="QR-code"
        value={input}
        placeholder="Enter Value"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={generateQRCode}
      >
        Generate
      </button>

      <div>
        <QRCode value={qrValue}></QRCode>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
