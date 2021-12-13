import React from 'react'

const ViewFeedback = () => {
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
                      <a href="feedback.php">
                        <h1 className="ml-1 main-heading"><i className="fas fa-angle-left mr-1" />Feedback Details</h1>
                      </a>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="col-md-8">
                              <label htmlFor className="my-label">First Name</label>
                              <p className="label-value">Mark Carson</p>
                            </div>
                            <div className="col-md-4">
                              <label htmlFor className="my-label">Email Address</label>
                              <p className="label-value">testing@test.com</p>
                            </div>
                          </div>
                          <div className="row mt-md-2">
                            <div className="col-md-8">
                              <label htmlFor className="my-label">Subject</label>
                              <p className="label-value">ABC</p>
                            </div>
                            <div className="col-md-4">
                              <label htmlFor className="my-label">Date Submitted</label>
                              <p className="label-value">21/02/2021</p>
                            </div>
                          </div>
                          <div className="row mt-md-2">
                            <div className="col-12">
                              <label htmlFor className="my-label">Description</label>
                              <p className="label-value">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deserunt corporis, dolore eaque impedit fugit iste. Iure molestiae, in nostrum reprehenderit repellat dolorem. Minus molestias doloremque obcaecati vel quaerat optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deserunt corporis, dolore eaque impedit fugit iste. Iure molestiae, in nostrum reprehenderit repellat dolorem. Minus molestias doloremque obcaecati vel quaerat optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deserunt corporis, dolore eaque impedit fugit iste. Iure molestiae, in nostrum reprehenderit repellat dolorem. Minus molestias doloremque obcaecati vel quaerat optio.</p>
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

export default ViewFeedback
