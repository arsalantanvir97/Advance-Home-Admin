import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
let pushinginarray = [];

const ContentManagement = () => {
  const [contentHome, setcontentHome] = useState([]);
  const [faqs, setfaqs] = useState([]);
  const [showanswerindex, setshowanswerindex] = useState();
  const [showanswer, setshowanswer] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  useEffect(() => {
    handleGetContentHome();
    getfaqsHandler();
  }, []);

  const handleGetContentHome = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/contentHome/getallContent`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });

      console.log("res", res);
      setcontentHome(res.data?.contenthome);
    } catch (err) {
      console.log("err", err);
    }
  };
  const getfaqsHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.get(`${baseURL}/faqs/getallfaqs`, config);
      setfaqs(res?.data?.faqs);
      console.log("faqsres", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  const setshowanswerindexhandler = async (index) => {
    console.log("index", index);
    if (showanswerindex?.includes(index)) {
      console.log("includesblock", pushinginarray);
      pushinginarray = pushinginarray?.filter((indexx) => indexx !== index);
      console.log("includesblockpushinginarray", pushinginarray);
      setshowanswerindex(pushinginarray);
      // setdaysArray(daysArray?.filter((days) => days !== day))
    } else {
      pushinginarray = [...pushinginarray, index];
      setshowanswerindex([...pushinginarray]);
      // daysArray?.push(day + '');
      console.log("showanswerindex", showanswerindex);
    }
  };
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
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="active-td d-inline-block">
                      {" "}
                      <span className="my-label" />
                    </p>
                  </div>
                </div>
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Home Page
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="pills-faqs-tab"
                      data-toggle="pill"
                      href="#pills-faqs"
                      role="tab"
                      aria-controls="pills-faqs"
                      aria-selected="false"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-8 mt-2">
                            <h2 className="main-heading">Doctors</h2>
                            <p className="home-para">
                              {contentHome?.doctorscontent}
                            </p>
                          </div>
                          <div className="col-lg-4 mt-2">
                            <img
                              src={"images/home-1.png"}
                              alt=""
                              className="img-fluid w-100 home-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 mt-2">
                            <img
                              src={"images/home-2.png"}
                              alt=""
                              className="img-fluid w-100 home-img"
                            />
                          </div>
                          <div className="col-lg-8 mt-2">
                            <h2 className="main-heading">Laborotories</h2>
                            <p className="home-para">
                              {contentHome?.labortariescontent}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <Link
                              to="/EditContentManagement"
                              className="general-btn d-inline-block mt-3 px-3"
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-faqs"
                        role="tabpanel"
                        aria-labelledby="pills-faqs-tab"
                      >
                        {faqs?.length > 0 &&
                          faqs?.map((faq, index) => (
                            <>
                              <button
                                className={
                                  showanswerindex?.includes(index)
                                    ? "accordion active"
                                    : "accordion"
                                }
                                onClick={() => {
                                  setshowanswer(!showanswer);
                                  setshowanswerindexhandler(index);
                                }}
                              >
                                {faq?.question}
                              </button>
                              <div
                                className="panel"
                                style={{
                                  maxHeight: showanswerindex?.includes(index)
                                    ? "60px"
                                    : null,
                                }}
                              >
                                <p>{faq?.answer}</p>
                              </div>
                            </>
                          ))}
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
  );
};

export default ContentManagement;
