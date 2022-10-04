import React from "react";
import { EventsContext } from "../../Context";

class ImageBanner extends React.Component {
  static contextType = EventsContext;

  getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = (e) => {
    const { setBase64 } = this.context;
    console.log("context", this.context);
    console.log("teste2", e.target.files[0]);
    let file = e.target.files[0];

    file = e.target.files[0];

    this.getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("File Is", file);
        setBase64(result);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <input
          type="file"
          name="file"
          onChange={this.handleFileInputChange}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default ImageBanner;
