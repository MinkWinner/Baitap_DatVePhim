import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSlot } from "../../redux/action/action";

class ThongtinDatve extends Component {
  renderListChoosing = () => {
    return this.props.listChoosing.map((list, index) => {
      return (
        <tr key={index}>
          <td className="text-light">{list.soGhe}</td>
          <td className="text-light">{list.gia}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.dispatch(deleteSlot(list.soGhe));
              }}
            >
              x
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <h1 className="text-success mb-4">Danh sách ghế bạn chọn</h1>
        <div className="gheDuocChon"></div>
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế đã đặt
        </span>
        <br />
        <div className="gheDangChon"></div>
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe" style={{ margin: "0" }}></button>
        <span className="text-light" style={{ fontSize: "25px" }}>
          Ghế chưa đặt
        </span>

        <table className="table mt-4" border="1">
          <thead>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderListChoosing()}</tbody>
          <tfoot>
            <tr className="text-warning">
              <td></td>
              <td>Tổng tiền</td>
              <td>
                {this.props.listChoosing.reduce((total, choosing) => {
                  return (total += choosing.gia);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listChoosing: state.bookingReducer.listChoosing,
  };
};

export default connect(mapStateToProps, null)(ThongtinDatve);
