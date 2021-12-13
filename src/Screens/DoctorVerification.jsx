import React from 'react'

const DoctorVerification = () => {
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
                <a href="doctor.php">
                  <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Doctor Verification Details</h1>
                </a>
              </div>
              <div className="col-lg-6 text-right my-auto">
                <a href="#_" className="my-label d-inline-block">Status: <span className="inactive-td">Pending</span></a>
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
                        <label htmlFor className="my-label">Full Name</label>
                      </div>
                      <div className="col-lg-6">
                        <p className="label-value">Mark Carson</p>
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
                        <p className="label-value">Abc Road California</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <a href="#_" className="general-btn-2 d-inline-block px-3" data-toggle="modal" data-target="#verify">Verify</a>
                        <a href="#_" className="general-btn d-inline-block px-3" data-toggle="modal" data-target="#reject">Reject</a>
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

export default DoctorVerification
