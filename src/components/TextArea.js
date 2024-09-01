import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to UpperCase", "success");
    }
  };

  const handleLoClick = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to LowerCase", "success");
    }
  };

  const handleOnChange = (event) => {
    // console.log("change")
    setText(event.target.value);
  };
  const handleCopy = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          props.showAlert("Text Copied", "success");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          props.showAlert("Failed to copy text", "danger");
        });
    }
  };
  const handleExtraSpaces = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      let newText = text.split(/[ ]+/).join(" ");
      setText(newText);
      props.showAlert("Extra spaces have been removed", "success");
    }
  };

  const handleClear = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      setText("");
      props.showAlert("Text Cleared", "success");
    }
  };

  const handleRemoveNumbers = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } else {
      let newText = text.replace(/[0-9]/g, "");
      setText(newText);
      props.showAlert("Removed Numbers from Text", "success");
    }
  };

  const handleFindReplace = () => {
    if (text.trim() === "") {
      props.showAlert("Enter text to manipulate", "danger");
    } 
    else{ let findText = prompt("Enter the text you want to find:");
    let replaceText = prompt("Enter the text to replace it with:");
    let newText = text.replaceAll(findText, replaceText);
    setText(newText);
    props.showAlert(`Replaced "${findText}" with "${replaceText}"`, "success");
    }
  };


const handleCapitalize = () => {
  if (text.trim() === "") {
    props.showAlert("Enter text to manipulate", "danger");
  } 
  else{ let newText = text.replace(/\b\w/g, char => char.toUpperCase());
  setText(newText);
  props.showAlert("Text Capitalized", "success");
  }
};
  // text = "new text";
  // setText("sdfghjkl;")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="7"
          ></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to upperCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy  text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
            Clear All Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleRemoveNumbers}
          >
            Remove Numbers
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleFindReplace}
          >
            Replace  text
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>
  Capitalize Text
</button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview here"}
        </p>
      </div>
    </>
  );
}
