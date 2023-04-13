import React from 'react'

const Profile = () => {
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
                      <h1 className="ml-1 main-heading">My Profile</h1>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12">
                          <img src="images/profile.png" alt="" className="user-proffile" />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-xl-5">
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor className="my-label">First Name</label>
                            </div>
                            <div className="col-md-6">
                              <h6 className="label-value">Mark</h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mt-2">
                              <label htmlFor className="my-label">Last Name</label>
                            </div>
                            <div className="col-md-6 mt-2">
                              <h6 className="label-value">Carson</h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mt-2">
                              <label htmlFor className="my-label">Email</label>
                            </div>
                            <div className="col-md-6 mt-2">
                              <h6 className="label-value">abc@xyz.com</h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mt-2">
                              <a href="edit-profile.php" className="general-btn d-inline-block px-3">Edit</a>
                            </div>
                            <div className="col-md-6 mt-2">
                              <a href="change-password.php" className="change-pwdd mt-2 d-inline-block">Change Password</a>
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

export default Profile
