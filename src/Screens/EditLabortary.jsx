import React from 'react'

const EditLabortary = () => {
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
                      <a href="laboratories.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Laborotory Edit</h1>
                      </a>
                    </div>
                    <div className="col-lg-6 text-right mt-lg-0 mt-2">
                      <h3 className="mr-no">Lab.Id: 1246</h3>
                    </div>
                  </div>
                  <form action="laboratories.php">
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Full Name*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Enter Full Name" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Lab Specialization**</label>
                        <input type="text" className="all-inputt w-100" placeholder="XYZ" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Email*</label>
                        <input type="email" className="all-inputt w-100" placeholder="Enter Email" />
                      </div>
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Password*</label>
                        <input type="password" className="all-inputt w-100" placeholder="*******" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Phone*</label>
                        <input type="number" className="all-inputt w-100" placeholder="Enter Phone" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 mt-2">
                        <label htmlFor className="site-labell">Address*</label>
                        <input type="text" className="all-inputt w-100" placeholder="Enter Address" />
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

export default EditLabortary
