import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSV extends Component {

  renderMangSV = () => {
   let kq = this.props.search.length > 0 ? this.props.search : this.props.mangSV
    return  kq.map((sv) => {
      return <tr key={sv.maSV}>
        <td>{sv.maSV}</td>
        <td>{sv.hoTen}</td>
        <td>{sv.sdt}</td>
        <td>{sv.email}</td>
        <td>
          <button onClick={() => {
            let action = {
              type: 'XOA_SV',
              maXoa: sv.maSV
            }
            this.props.dispatch(action)
          }} className='btn btn-danger mr-3'>Xóa</button>
          <button onClick={() => {
            let action = {
              type: 'XEM_CT',
              sinhVienCT: sv
            }
            this.props.dispatch(action)
          }} className='btn btn-info'>Xem</button>
        </td>
      </tr>
    })
  }

  render() {
    return (
      <div className='contaiter py-3'>
        <table className="table">
          <thead>
            <tr className='text-light bg-dark'>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMangSV()}
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSV: rootReducer.QLSVReducer.mangSV,
    search: rootReducer.QLSVReducer.search
  }
}

export default connect(mapStateToProps)(TableSV)
