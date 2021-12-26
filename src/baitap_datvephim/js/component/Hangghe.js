import React, { Component } from "react";
import { connect } from "react-redux";
import { slotChoosing } from "../../redux/action/action";

class Hangghe extends Component {
  renderDanhSachGhe = (list, firstLine) => {
    if (firstLine === 0) {
      return list.danhSachGhe.map((ghe, index) => {
        return (
          <span key={index} className="rowNumber">
            {ghe.soGhe}
          </span>
        );
      });
    }

    return list.danhSachGhe.map((ghe, index) => {
      let cssTinhtrangGhe = "";
      let disable = false;
      if (ghe.daDat) {
        cssTinhtrangGhe = "gheDuocChon";
        disable = true;
      }
      const dangChon = this.props.listChoosing.findIndex(
        (ds) => ds.soGhe === ghe.soGhe
      );
      if (dangChon !== -1) {
        cssTinhtrangGhe = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`ghe ${cssTinhtrangGhe}`}
          style={{ fontSize: 15 }}
          disabled={disable}
          onClick={() => {
            this.props.choosing(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderGhe = () => {
    return this.props.listGhe.map((list, index) => {
      return (
        <div
          key={index}
          className="text-light sapXep"
          style={{ fontSize: 30, marginBottom: 10 }}
        >
          <span className="rowNumber" style={{ marginLeft: 0 }}>
            {list.hang}
          </span>
          {this.renderDanhSachGhe(list, index)}
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <h1 className="text-danger text-center">Đặt vé xem phim</h1>
        <h3 className="text-light text-center">Màn hình</h3>
        <div className="screen"></div>
        <div style={{ width: "90%", margin: "auto" }}>{this.renderGhe()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listGhe: state.bookingReducer.listGhe,
    listChoosing: state.bookingReducer.listChoosing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosing: (ghe) => {
      dispatch(slotChoosing(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hangghe);
