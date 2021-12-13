import React from 'react'

const EditContentManagement = () => {
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
                      <h1 className="ml-1 main-heading">Content Management</h1>
                    </div>
                    <div className="col-lg-6 text-right">
                      <a href="#_" className="general-btn f-inline-block px-3" data-toggle="modal" data-target="#question">Add</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="active-td d-inline-block"> <span className="my-label" /></p>
                    </div>
                  </div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home Page</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="pills-faqs-tab" data-toggle="pill" href="#pills-faqs" role="tab" aria-controls="pills-faqs" aria-selected="false">FAQs</a>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <div className="row">
                            <div className="col-lg-8 mt-2">
                              <h2 className="main-heading">Doctors</h2>
                              <div ss-container className="home-back">
                                <p className="home-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!</p>
                                <p className="home-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!</p>
                              </div>
                            </div>
                            <div className="col-lg-4 mt-2 position-relative text-center">
                              <img src="images/home-1.png" alt="" className="img-fluid w-100 home-img" />
                              <div className="img-delete">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v" />
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#_">Delete</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 mt-2 position-relative text-center">
                              <img src="images/home-2.png" alt="" className="img-fluid w-100 home-img" />
                              <div className="img-delete">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v" />
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#_">Delete</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8 mt-2">
                              <h2 className="main-heading">Laborotories</h2>
                              <div ss-container className="home-back">
                                <p className="home-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!</p>
                                <p className="home-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati iure asperiores veritatis dignissimos mollitia vel nostrum at, earum soluta possimus minima quo velit minus facere veniam exercitationem nam error!</p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <a href="content-management.php" className="general-btn d-inline-block mt-3 px-3">Update</a>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="pills-faqs" role="tabpanel" aria-labelledby="pills-faqs-tab">
                          <button className="accordion">Lorem ipsum dolor sit amet, consectetur adipiscing?</button>
                          <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <button className="accordion">Lorem ipsum dolor sit amet, consectetur adipiscing?</button>
                          <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <button className="accordion">Lorem ipsum dolor sit amet, consectetur adipiscing?</button>
                          <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          <div className="row">
                            <div className="col-12 text-center">
                              <a href="#_" className="general-btn-2 d-inline-block">Update</a>
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

export default EditContentManagement
