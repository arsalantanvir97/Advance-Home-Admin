import React from 'react'

const ViewUser = () => {
    return (
        <div className="app-content content dashboard">
        <div className="content-wrapper content-wrapper-2">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row card px-lg-5 pb-5">
                <div className="col-12">
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <a href="user.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />User Details</h1>
                      </a>
                    </div>
                    <div className="col-lg-6 text-right my-auto">
                      <a href="#_" data-toggle="modal" data-target="#inactivate" className="my-label d-inline-block">Status: <span className="active-td">Active</span></a>
                      <h2 className="my-label my-1">Mr-No: 1246</h2>
                      <h2 className="my-label">Added by:Admin</h2>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 mb-lg-5 mb-3">
                          <img src="images/user-pic.png" alt="" className="user-proffile" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">First Name</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Carson</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Birthdate</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">01/02/2021</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Gender</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Male</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Blood Type</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">B-</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Insurance No</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">000000</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Home Address</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">ABC Road, California</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Phone No</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">000-0000-0000</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Email Address</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">abc@xyz.com</p>
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

export default ViewUser
