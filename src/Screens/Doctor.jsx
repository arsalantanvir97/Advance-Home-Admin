import React from 'react'

const Doctor = () => {
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
                      <h1 className="ml-1 main-heading">Doctor</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="active-td d-inline-block"> <span className="my-label" /></p>
                    </div>
                  </div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="pills-doctor-logs-tab" data-toggle="pill" href="#pills-doctor-logs" role="tab" aria-controls="pills-doctor-logs" aria-selected="true">Doctor Logs</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="pills-verification-tab" data-toggle="pill" href="#pills-verification" role="tab" aria-controls="pills-verification" aria-selected="false">Doctor Verification</a>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-doctor-logs" role="tabpanel" aria-labelledby="pills-doctor-logs-tab">
                          <div className="row">
                            <div className="offset-lg-6 col-lg-6 text-right">
                              <a href="add-doctor.php" className="general-btn d-inline-block">Add New</a>
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
                                <div className="col-xl-6 text-right mt-2">
                                  <label className>Filter by:</label>
                                  <select name id className="general-select w-50">
                                    <option value>Select</option>
                                  </select>
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
                                            <th className="sorting">Full Name</th>
                                            <th className="sorting">DOC. ID</th>
                                            <th className="sorting">Email</th>
                                            <th className="sorting">Date</th>
                                            <th className="sorting_asc">Status</th>
                                            <th className="sorting">ACTIONs</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>01</td>
                                            <td>Mark Carson</td>
                                            <td>001</td>
                                            <td>abc@xyz.com</td>
                                            <td>02/0/2021</td>
                                            <td><span className="active-td">Active</span></td>
                                            <td>
                                              <div className="btn-group ml-1">
                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                                  <i className="fa fa-ellipsis-v" />
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="view-doctor.php">View</a>
                                                  <a className="dropdown-item" href="#_" data-toggle="modal" data-target="#inactivate">Inactive</a>
                                                  <a className="dropdown-item" href="edit-doctor.php">Edit</a>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>01</td>
                                            <td>Mark Carson</td>
                                            <td>001</td>
                                            <td>abc@xyz.com</td>
                                            <td>02/0/2021</td>
                                            <td><span className="inactive-td">Inactive</span></td>
                                            <td>
                                              <div className="btn-group ml-1">
                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                                  <i className="fa fa-ellipsis-v" />
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="view-doctor-inactive.php">View</a>
                                                  <a className="dropdown-item" href="#_" data-toggle="modal" data-target="#activate">Active</a>
                                                  <a className="dropdown-item" href="edit-doctor.php">Edit</a>
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
                        <div className="tab-pane fade" id="pills-verification" role="tabpanel" aria-labelledby="pills-verification-tab">
                          <div className="row">
                            <div className="offset-lg-6 col-lg-6 text-right">
                              <a href="add-doctor.php" className="general-btn d-inline-block">Add New</a>
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
                                <div className="col-xl-6 text-right mt-2">
                                  <label className>Filter by:</label>
                                  <select name id className="general-select w-50">
                                    <option value>Select</option>
                                  </select>
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
                                            <th className="sorting">Full Name</th>
                                            <th className="sorting">Email</th>
                                            <th className="sorting">Date</th>
                                            <th className="sorting_asc">Status</th>
                                            <th className="sorting">ACTIONs</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>01</td>
                                            <td>Mark Carson</td>
                                            <td>abc@xyz.com</td>
                                            <td>02/0/2021</td>
                                            <td><span className="active-td">Active</span></td>
                                            <td>
                                              <div className="btn-group ml-1">
                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                                  <i className="fa fa-ellipsis-v" />
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="doctor-verification-2.php">View</a>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>01</td>
                                            <td>Mark Carson</td>
                                            <td>abc@xyz.com</td>
                                            <td>02/0/2021</td>
                                            <td><span className="inactive-td">Reject</span></td>
                                            <td>
                                              <div className="btn-group ml-1">
                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                                  <i className="fa fa-ellipsis-v" />
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="doctor-verification-3.php">View</a>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>01</td>
                                            <td>Mark Carson</td>
                                            <td>abc@xyz.com</td>
                                            <td>02/0/2021</td>
                                            <td><span className="inactive-td">Pending</span></td>
                                            <td>
                                              <div className="btn-group ml-1">
                                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                                  <i className="fa fa-ellipsis-v" />
                                                </button>
                                                <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="doctor-verification.php">View</a>
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

export default Doctor
