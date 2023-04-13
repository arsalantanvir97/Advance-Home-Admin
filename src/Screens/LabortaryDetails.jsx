import React from 'react'

const LabortaryDetails = () => {
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
                      <a href="laboratories.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Laboratories detail</h1>
                      </a>
                    </div>
                    <div className="col-lg-6 text-right my-auto">
                      <a href="#_" className="my-label d-inline-block">Status: <span className="active-td">Active</span></a>
                      <h2 className="my-label my-1">Lab.Id: 1246</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-lg-5 mb-3">
                      <img src="images/user-pic.png" alt="" className="user-proffile" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Full Name</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Mark Carson</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Email</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">abc@xyz.com</p>
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
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Address</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Abc Road</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Qualification</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">ABC</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Specialization</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">XYZ</p>
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

export default LabortaryDetails
