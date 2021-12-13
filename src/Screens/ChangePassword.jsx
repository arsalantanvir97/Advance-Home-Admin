import React from 'react'

const ChangePassword = () => {
    return (
        <div className="app-content content dashboard">
        <div className="content-wrapper content-wrapper-2">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12 white-div px-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="profile.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-chevron-left mr-1" />Change Password</h1>
                      </a>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group position-relative">
                                <label htmlFor className="my-label">Current Password*</label>
                                <input type="password" className="pro-input-22 w-100 enter-input" placeholder="Enter Current Password" />
                                <i className="far fa-eye-slash enter-icon right-icon-33" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 mt-2">
                              <div className="form-group position-relative">
                                <label htmlFor className="my-label">New Password*</label>
                                <input type="password" className="pro-input-22 w-100 enter-input-2" placeholder="New Password" />
                                <i className="far fa-eye-slash enter-icon-2 right-icon-33" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 mt-2">
                              <div className="form-group position-relative">
                                <label htmlFor className="my-label">Confirm Password*</label>
                                <input type="password" className="pro-input-22 w-100 enter-input-3" placeholder="Confirm Password" />
                                <i className="far fa-eye-slash enter-icon-3 right-icon-33" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mt-4">
                          <a href="profile.php" className="general-btn d-inline-block px-3">Update</a>
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

export default ChangePassword
