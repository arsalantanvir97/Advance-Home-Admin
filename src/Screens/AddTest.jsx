import React from 'react'

const AddTest = () => {
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
                <a href="test-management.php">
                  <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Tests Details Add</h1>
                </a>
              </div>
              <div className="col-lg-6 text-right my-auto">
                <a href="#_" className="my-label d-inline-block">Status: <span className="active-td">Active</span></a>
                <h2 className="my-label my-1">Test.Id: 1246</h2>
              </div>
            </div>
            <form action="test-management.php">
              <div className="row">
                <div className="col-lg-4 mt-2">
                  <label htmlFor className="site-labell">Test Name:</label>
                  <input type="text" className="all-inputt w-100" placeholder="Enter Test Name" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-2">
                  <label htmlFor className="site-labell">Date Added:</label>
                  <p className="label-value">mm/dd/yyyy</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-2">
                  <label htmlFor className="site-labell d-block">Image:</label>
                  <span className="position-relative">
                    <img src="images/test-2.png" alt="" className="test-2" />
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
                  <label htmlFor className="site-labell">Amount:</label>
                  <input type="text" className="all-inputt w-100" placeholder="Enter price Amount" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-2">
                  <label htmlFor className="site-labell">Description:</label>
                  <textarea name id className="all-inputt w-100 p-2" rows={8} placeholder="Enter Description" defaultValue={""} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="general-btn mt-3 px-3">Add</button>
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

export default AddTest
