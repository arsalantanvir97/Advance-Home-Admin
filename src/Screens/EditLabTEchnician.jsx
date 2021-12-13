import React from 'react'

const EditLabTEchnician = () => {
    return (
        <div className="app-content content dashboard">
        <div className="content-wrapper content-wrapper-2">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row card px-lg-5 py-lg-5 py-3">
                <div className="col-12 mb-5">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="lab-technicians.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Lab Technician Edit</h1>
                      </a>
                    </div>
                    <div className="col-lg-6 text-right mt-lg-0 mt-2">
                      <h3 className="mr-no">Lab Techncian.Id: 1246</h3>
                    </div>
                  </div>
                  <form action="lab-technicians.php">
                    <div className="row">
                      <div className="col-lg-12">
                        <span className="position-relative">
                          <img src="images/profile.png" alt="" className="user-proffile" />
                          <label htmlFor="picture" className="d-block">
                            <img src="images/uplod-profile-img.png" alt="" className="pro-upload" />
                          </label>
                        </span>
                        <div className="d-none">
                          <input type="file" name="pic" accept=".gif,.jpg,.png,.tif|image/*" id="picture" />
                          <input type="submit" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Full Name*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Enter Full Name" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Color*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Blue" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Email*</label>
                        <input type="email" className="all-inputt w-100" placeholder="Enter Email" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Qualification*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Enter Qualification" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Phone*</label>
                        <input type="number" className="all-inputt w-100" placeholder="Enter Phone" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Specialization*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Enter Specialization" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Car/Bike*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Car" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Password*</label>
                        <input type="password" className="all-inputt w-100" placeholder="*******" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Modal*</label>
                        <input type="text" className="all-inputt w-100" placeholder={2002} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button className="general-btn mt-3 px-3">Update</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    )
}

export default EditLabTEchnician
