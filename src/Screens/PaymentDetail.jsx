import React from 'react'

const PaymentDetail = () => {
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
                      <a href="booking-detail.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Payment Details</h1>
                      </a>
                    </div>
                    <div className="col-lg-6 text-right my-auto">
                      <a href="#_" className="my-label d-inline-block">Status: <span className="pending-td">Paid</span></a>
                      <h2 className="my-label my-1">Test.Id: 1246</h2>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="row">
                            <div className="col-12">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1638272432426!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" className="w-100 map-iframe mb-2" height={250} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Test Name:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">XYZ</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Date Selected:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">01/02/2021</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Time Selected:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="lble-back">07:00 AM</p>
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
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Payment Method:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Insurance</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Insurance Number:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">00000000000</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Card:</label>
                            </div>
                            <div className="col-lg-6">
                              <i className="fas fa-file-pdf pdf-file" />
                              <a href="images/doctor.png" download className="active-td underline">Download</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">Amount:</label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">$25</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mt-2">
                              <a href="#_" className="general-btn d-inline-block px-5">Track</a>
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

export default PaymentDetail
