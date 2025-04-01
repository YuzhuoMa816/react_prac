import { useState, useEffect } from "react";
import "./accordianStyle.css";
import data from "./accordianData";
function Accordian() {
  const enableMultipleSelectedWord = "Enable Multiple Selection";
  const enableSingleSelectedWord = "Enable Single Selection";

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiselectWords, setMultiselectWords] = useState(
    enableMultipleSelectedWord
  );

  const [selectedList, setSelectedList] = useState([]);

  // single selection
  function handleAccordianSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  // multiple
  function handleAccordianMultipleSelection(id) {
    let tempAccordList = [...selectedList];
    if (tempAccordList.includes(id)) {
      tempAccordList = tempAccordList.filter((item) => item !== id);
    } else {
      tempAccordList.push(id);
    }

    setSelectedList(tempAccordList);
  }

  function MultipleSelectClick() {
    setEnableMultiSelection((prev) => {
      if (prev) {
        setMultiselectWords(enableMultipleSelectedWord);
      } else {
        setMultiselectWords(enableSingleSelectedWord);
      }
      return !prev;
    });

    setSelectedList([]);
    setSelected(null);
  }

  return (
    <div className="wrapper">
      <button onClick={MultipleSelectClick}>{multiselectWords}</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleAccordianMultipleSelection(dataItem.id)
                    : () => handleAccordianSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection ? (
                selectedList.includes(dataItem.id) && (
                  <div className="content">{dataItem.answer}</div>
                )
              ) : selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}

              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
