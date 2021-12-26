import React, { Component } from "react";
import "./../css/index.css";
import ThongtinDatve from "./component/ThongtinDatve";
import Hangghe from "./component/Hangghe";

export default class DatVePhim extends Component {
  render() {
    return (
      <div className="mainBg">
        <div className="row px-5">
          <div className="col-8 px-5">
            <Hangghe />
          </div>
          <div className="col-4">
            <ThongtinDatve />
          </div>
        </div>
      </div>
    );
  }
}
