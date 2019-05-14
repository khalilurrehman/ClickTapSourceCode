import React, { Component } from "react";
import { data } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

export default class Mostviewed extends Component {
  render() {
    const { params } = this.props.match;
    const results = data.map(rowdata =>
      rowdata.results.map(subRowdata => {
        let ImageList;
        // Validating By Id
        if (subRowdata.id == params.id) {
          //Fetching Image and Caption
          let getmedia = subRowdata.media;
          let caption = getmedia[0]["caption"];
          let x = getmedia.mediametadata;
          let images;
          ImageList = getmedia.map(fetchdata => {
            images = fetchdata.mediametadata;
            let z = images[4];
            // Returns Image
            return (
              <React.Fragment>
                <div className="myImg">
                  <Image src={z["url"]} />
                  <p>{caption}</p>
                </div>
              </React.Fragment>
            );
          });
        }
        // Validating Data by Id
        if (subRowdata.id == params.id) {
          return (
            <React.Fragment>
              <div className="container myDetail">
                <div className="row">
                  <div className="col-md-12">
                    <div className="myThumbnail">{ImageList}</div>
                    <small>
                      <span>{subRowdata.published_date}</span>
                    </small>
                    <h2>{subRowdata.title}</h2>
                    <p>{subRowdata.abstract}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
      })
    );
    return <React.Fragment>{results}</React.Fragment>;
  }
}
