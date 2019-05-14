import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { data } from "../api";

export default class Articles extends Component {
  render() {
    const results = data.map(rowdata =>
      rowdata.results.map(subRowdata => {
        // Fetching Image
        let getMedia = subRowdata.media;
        let ImageList, images;
        ImageList = getMedia.map(fetchData => {
          images = fetchData.mediametadata;
          let z = images[0];
          // Passing Image
          return (
            <React.Fragment>
              <Image src={z["url"]} roundedCircle />
            </React.Fragment>
          );
        });

        return (
          <div className="py-2">
            <div className="container">
              <Link to={`/detail/${subRowdata.id}`}>
                <div className="card">
                  <div className="card-body al-c">
                    <div className="row">
                      <div className="col-2">
                        <div className="circleImg">{ImageList}</div>
                      </div>
                      <div className="col-10">
                        <h5 className="card-title">{subRowdata.title}</h5>
                        <p className="card-text by">{subRowdata.byline}</p>
                        <SpanRight className="pull-right date">
                          {subRowdata.published_date}
                        </SpanRight>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })
    );

    return <React.Fragment>{results}</React.Fragment>;
  }
}

const SpanRight = styled.span`
  float: right;
`;
const SpanRightText = styled.span`
  float: right;
  font-size: 14px;
  color: green;
  padding-top: 10px;
`;
