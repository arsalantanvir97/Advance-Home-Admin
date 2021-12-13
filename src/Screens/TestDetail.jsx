import React from 'react'

const TestDetail = () => {
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
                <a href="test-management.php">
                  <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Tests Details</h1>
                </a>
              </div>
              <div className="col-lg-6 text-right my-auto">
                <a href="#_" className="my-label d-inline-block">Status: <span className="active-td">Active</span></a>
                <h2 className="my-label my-1">Test.Id: 1246</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor className="my-label">Test Name:</label>
                      </div>
                      <div className="col-lg-6">
                        <p className="label-value">XYZ</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor className="my-label">Date Added:</label>
                      </div>
                      <div className="col-lg-6">
                        <p className="label-value">mm/dd/yyyy</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor className="my-label">Amount:</label>
                      </div>
                      <div className="col-lg-6">
                        <p className="label-value">$30</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor className="my-label">Image:</label>
                      </div>
                      <div className="col-lg-6">
                        <img src="images/test-2.png" alt="" className="test-2" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <label htmlFor className="my-label">Description:</label>
                      </div>
                      <div className="col-lg-6 mt-2">
                        <p className="label-value">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                        </p>
                        <a href="edit-test.php" className="general-btn d-inline-block px-3">Edit</a>
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

export default TestDetail
