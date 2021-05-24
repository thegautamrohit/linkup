import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [modalimg, setModalimg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setModalimg={setModalimg} />
      {modalimg && <Modal modalimg={modalimg} setModalimg={setModalimg} />}
    </div>
  );
}

export default App;
