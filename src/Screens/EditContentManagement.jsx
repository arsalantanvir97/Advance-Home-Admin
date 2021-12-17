import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
let pushinginarray=[]
const EditContentManagement = ({ history }) => {
  const [contentHome, setcontentHome] = useState([]);
  const [doctorscontent, setdoctorscontent] = useState("");
  const [labortariescontent, setlabortariescontent] = useState("");
  const [question, setquestion] = useState("");
  const [showanswer, setshowanswer] = useState(false);
  const [showanswerindex, setshowanswerindex] = useState();

  const [answer, setanswer] = useState("");
  const [faqs, setfaqs] = useState([]);

  const [rerender, setrerender] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  useEffect(() => {
    handleGetContentHome();
  }, []);
  useEffect(() => {
    console.log('showanswerindex',showanswerindex);
  }, [showanswerindex]);

  useEffect(() => {
    getfaqsHandler();
  }, [rerender]);
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
      setdoctorscontent(res.data?.contenthome?.doctorscontent);
      setlabortariescontent(res.data?.contenthome?.labortariescontent);

      setcontentHome(res.data?.contenthome);
    } catch (err) {
      console.log("err", err);
    }
  };

  const updateContentHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/contentHome/updateContent`,
        { doctorscontent, labortariescontent },
        config
      );
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Content Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/ContentManagement");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const addfaqsHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/faqs/createFaqs`,
        { question, answer },
        config
      );
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
    setquestion("");
    setanswer("");
    setrerender(!rerender);
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
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  const setshowanswerindexhandler=async(index)=>{
    console.log("index", index);
    if (showanswerindex?.includes(index)) {
      console.log("includesblock",pushinginarray);
      pushinginarray = pushinginarray?.filter((indexx) => indexx !== index);
      console.log('includesblockpushinginarray',pushinginarray);
      setshowanswerindex(pushinginarray);
      // setdaysArray(daysArray?.filter((days) => days !== day))
    } else {
      pushinginarray = [...pushinginarray, index];
      setshowanswerindex([...pushinginarray]);
      // daysArray?.push(day + '');
      console.log("showanswerindex", showanswerindex);
    }
  }
  return (
    <>
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
                      <a
                        href="#_"
                        className="general-btn f-inline-block px-3"
                        data-toggle="modal"
                        data-target="#question"
                      >
                        Add
                      </a>
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
                              <div ss-container className="home-back">
                                <textarea
                                  name
                                  id
                                  className="all-inputt w-100 p-2"
                                  rows={7}
                                  placeholder="Enter Description"
                                  defaultValue={""}
                                  value={doctorscontent}
                                  onChange={(e) =>
                                    setdoctorscontent(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 mt-2 position-relative text-center">
                              <img
                                src={"images/home-1.png"}
                                alt=""
                                className="img-fluid w-100 home-img"
                              />
                              {/* <div className="img-delete">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">
                                  Delete
                                </Link>
                              </div>
                            </div> */}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 mt-2 position-relative text-center">
                              <img
                                src={"images/home-2.png"}
                                alt=""
                                className="img-fluid w-100 home-img"
                              />
                              {/* <div className="img-delete">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">
                                  Delete
                                </Link>
                              </div>
                            </div> */}
                            </div>
                            <div className="col-lg-8 mt-2">
                              <h2 className="main-heading">Laborotories</h2>
                              <div ss-container className="home-back">
                                <textarea
                                  name
                                  id
                                  className="all-inputt w-100 p-2"
                                  rows={7}
                                  placeholder="Enter Description"
                                  defaultValue={""}
                                  value={labortariescontent}
                                  onChange={(e) =>
                                    setlabortariescontent(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <Link
                                to="#"
                                className="general-btn d-inline-block mt-3 px-3"
                                onClick={updateContentHandler}
                              >
                                Update
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
                                    setshowanswerindexhandler(index)
                                  }}
                                >
                                  {faq?.question}
                                </button>
                                <div
                                  className="panel"
                                  style={{
                                    maxHeight:  showanswerindex?.includes(index) ? "60px" : null,
                                  }}
                                >
                                  <p>{faq?.answer}</p>
                                </div>
                              </>
                            ))}
                          <div className="row">
                            <div className="col-12 text-center">
                              <Link
                                to="#"
                                className="general-btn-2 d-inline-block"
                              >
                                Update
                              </Link>
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
      <div
        className="modal fade"
        id="question"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className="text-center" id="configuration">
              <h2 className="modal-hading">Add New Question</h2>
              <div className="mb-lg-5 mb-3">
                <label htmlFor className="site-labell d-block text-left">
                  Question:
                </label>
                <input
                  type="search"
                  className="w-100 all-inputt mx-auto"
                  placeholder="Serach Lab technician"
                  value={question}
                  onChange={(e) => {
                    setquestion(e.target.value);
                  }}
                />
                <label htmlFor className="site-labell mt-2 d-block text-left">
                  Answer
                </label>
                <textarea
                  name
                  rows={8}
                  className="w-100 all-inputt mx-auto p-2"
                  placeholder="Write Here"
                  defaultValue={""}
                  value={answer}
                  onChange={(e) => {
                    setanswer(e.target.value);
                  }}
                />
              </div>
              <div className="modal-btn-div">
                <Link
                  onClick={addfaqsHandler}
                  className="general-btn d-inline-block px-3 mt-1"
                  to="#"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContentManagement;
