import React from 'react'
import { Link } from 'react-router-dom'

const DoctorRooster = () => {
    return (
        <div className="app-content content dashboard">
  <div className="content-wrapper content-wrapper-2">
    <div className="content-body">
      {/* Basic form layout section start */}
      <section id="configuration">
        <div className="row card py-lg-5 py-3">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6">
                <Link to='/Doctor'>
                  <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Doctor Rooster</h1>
                </Link>
              </div>
            </div>
            <div className="dataTables_wrapper">
              <div className="user-listing-top">
                <div className="row align-items-end d-flex mb-4">
                  <div className="col-xl-6 mt-2 sort-datepicker">
                    <div className="d-sm-flex align-items-center">
                      <label className>Sort by:</label>
                      <div className="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
                        <input type="date" placeholder="From" className="form-control" />
                      </div>
                      <div className="input-wrap">
                        <input type="date" placeholder="To" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                    <div className="dataTables_length">
                      <label className="d-inline-block">Show</label>
                      <select className="form-control d-inline-block table-entry">
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                      <label className="d-inline-block ml-1">Entries</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                    <div className="dataTables_filter">
                      <div className="search-wrap">
                        <input type="search" className="form-control" placeholder="Search" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-table">
                <div className="main-tabble table-responsive">
                  <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table table-borderless dataTable">
                          <thead>
                            <tr>
                              <th className="sorting_asc">SR. No.</th>
                              <th className="sorting">Doctor Name</th>
                              <th className="sorting">File Name</th>
                              <th className="sorting">File</th>
                              <th className="sorting">Date</th>
                              <th className="sorting">ACTIONs</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01</td>
                              <td>Mark Carson</td>
                              <td>ABC</td>
                              <td><a href="images/card-1.png" download className="active-td">
                                  <img src="images/download-file.png" alt="" />
                                  Download
                                </a>
                              </td>
                              <td>02/0/2021</td>
                              <td>
                                <div className="btn-group ml-1">
                                  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-ellipsis-v" />
                                  </button>
                                  <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#_" data-target="#import" data-toggle="modal">Import</a>
                                    <a className="dropdown-item" href="#_" data-target="#delete" data-toggle="modal">Delete</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm-12 col-md-5">
                        <div className="showing-result" id="DataTables_Table_0_info">
                          Showing 1 to 3 of 3 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                          <ul className="pagination">
                            <li className="paginate_button page-item previous disabled">
                              <a href="#" className="page-link">Previous</a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a href="#" className="page-link">1</a>
                            </li>
                            <li className="paginate_button page-item">
                              <a href="#" className="page-link">2</a>
                            </li>
                            <li className="paginate_button page-item">
                              <a href="#" className="page-link">3</a>
                            </li>
                            <li className="paginate_button page-item next disabled" i>
                              <a href="#" className="page-link">Next</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    )
}

export default DoctorRooster
