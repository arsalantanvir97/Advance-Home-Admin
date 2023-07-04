import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import DatePick from "../components/DatePick";
import Toasty from "../utils/toast";
import { handleChange } from "../utils/InputNumberValidation";
import { validateEmail } from "../utils/ValidateEmail";
import InputPhone from "../components/InputPhone";
import InputNumber from "../components/InputNumber";
import ImageSelectDropzone from "../components/ImageSelectDropzone";
import TagsInput from 'react-tagsinput'

const AddUser = ({ history }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [provider, setprovider] = useState("");
  const [InsuranceName1, setInsuranceName1] = useState("");
  const [InsuranceAddress1, setInsuranceAddress1] = useState("");
  const [InsuranceGroup1, setInsuranceGroup1] = useState("");
  const [InsurancePolicyNo1, setInsurancePolicyNo1] = useState("");
  const [InsuranceName2, setInsuranceName2] = useState("");
  const [InsuranceAddress2, setInsuranceAddress2] = useState("");
  const [InsuranceGroup2, setInsuranceGroup2] = useState("");
  const [InsurancePolicyNo2, setInsurancePolicyNo2] = useState("");
  const [doc_schedule, setdoc_schedule] = useState("");
  const [loading, setloading] = useState(false);
  const [pictures_features, setpictures_features] = useState([]);
const [icd,setIcd]= useState("")
  const [companyname, setcompanyname] = useState("");
  const [policyno, setpolicyno] = useState("");
  const [insured, setinsured] = useState(true);
  const [fax, setfax] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  // const [bloodtypee, setbloodtypee] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [image, setimage] = useState("");
  const [phone_number_2, setphone_number_2] = useState("");
  const [provider_npl_number, setprovider_npl_number] = useState("");
  const [provider_address, setprovider_address] = useState("");
  const [provider_phone, setprovider_phone] = useState("");
  const [provider_fax, setprovider_fax] = useState("");
  const [provider_email, setprovider_email] = useState("");
  const [data, setData] = useState({
    project_images: []
  });

  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  useEffect(() => {
    console.log(pictures_features, "pictures_features");
  }, [pictures_features]);
  const addUserHandler = async () => {
    const { project_images } = data;

    // let bloodtype =
    //   bloodtypee == "A+"
    //     ? { type: "A", sign: "+" }
    //     : bloodtypee == "AB-"
    //     ? { type: "AB", sign: "-" }
    //     : bloodtypee == "0+"
    //     ? { type: "0", sign: "+" }
    //     : bloodtypee == "0-"
    //     ? { type: "0", sign: "-" }
    //     : null;

    // console.log("bloodtype", bloodtype);
    setloading(true);
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
        const formData = new FormData();
        formData.append("user_image", image);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("provider", provider);
        formData.append("doc_schedule", doc_schedule);
        formData.append("icd",icd);

        formData.append("companyname", companyname);
        formData.append("InsuranceName1", InsuranceName1);
        formData.append("InsuranceAddress1", InsuranceAddress1);
        formData.append("InsuranceGroup1", InsuranceGroup1);
        formData.append("InsurancePolicyNo1", InsurancePolicyNo1);
        formData.append("InsuranceName2", InsuranceName2);
        formData.append("InsuranceAddress2", InsuranceAddress2);
        formData.append("InsuranceGroup2", InsuranceGroup2);
        formData.append("InsurancePolicyNo2", InsurancePolicyNo2);
        formData.append("policyno", policyno);
        formData.append("insured", insured);
        formData.append("fax", fax);
        formData.append("password", password);
        formData.append("phone_number_2", phone_number_2);
        formData.append("provider_npl_number", provider_npl_number);
        formData.append("provider_address", provider_address);
        formData.append("provider_phone", provider_phone);
        formData.append("provider_fax", provider_fax);
        formData.append("provider_email", provider_email);
        formData.append("gender", gender);
        formData.append("address", address);
        formData.append("email", email);
        project_images.forEach((reciept) => formData.append("pictures_features", reciept));

        // formData.append("pictures_features", pictures_features);

        // formData.append("bloodtype", JSON.stringify(bloodtype));
        formData.append("phoneNumber", phoneNumber);
        formData.append("birthDate", birthDate);
        formData.append("type", "Admin");

        const body = formData;
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        const res = await axios.post(
          `${baseURL}/user/createUser`,
          body,
          config
        );
        setloading(false);

        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/User");
        }
      } else {
        Toasty("error", `Please enter a valid email`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setloading(false);
  };
  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_schedule(e?.target?.files[0]);
  };

  const handleChange = (tags) => {
    setpictures_features(tags)
  }

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row card px-lg-5 py-lg-5 py-3">
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-lg-6 mb-5">
                    <Link to="/User">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        User Add
                      </h1>
                    </Link>
                  </div>
                  {/* <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Mr-No: 1246</h3>
                  </div> */}
                </div>
                <form action>
                  <div className="main-over-box">
                    <label htmlFor className="site-labell">
                      Upload User Image
                    </label>
                    <ImageSelector
                      setImage={setimage}
                      image={image}
                      is_edit={is_edit}
                    />
                  </div>

                  <div className="col-lg-6 mt-2 pr-1 pl-0">
                  <p className="primary-text ">
                      Upload Features Pictures
                    </p>
                  <ImageSelectDropzone
                      max={5}
                      setproductimage={setpictures_features}
                      files={data?.project_images}
                      setFiles={(project_images) =>
                        setData({ ...data, project_images })
                      }
                      accept="image/*"
                    /></div>
                   

                  <div className="row">
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter First Name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Last Name"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell d-block" >
                        Gender*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={gender}
                          onChange={() => {
                            setgender("Male");
                          }}
                          type="radio"
                          id="test1"
                          name="radio-group"
                        />
                        <label htmlFor="test1">Male</label>
                      </p>
                      <p className="d-inline-block mr-1">
                        <input
                          type="radio"
                          id="test2"
                          name="radio-group"
                          value={gender}
                          onChange={() => {
                            setgender("Female");
                          }}
                        />
                        <label htmlFor="test2">Female</label>
                      </p>
                    </div>
                  </div>



                  <div className="row">
                  <div className="col-lg-6 mt-0">
                    <label htmlFor className="site-labell">
                      Address*
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>

                  

                <div className="row">
                  <div className="col-lg-6 mt-2 phoneInput">
                    <label htmlFor className="site-labell">
                      Phone*
                    </label>
                    <InputPhone value={phoneNumber} onChange={setphoneNumber} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2 phoneInput">
                    <label htmlFor className="site-labell">
                      Phone Number 2*
                    </label>
                    <InputPhone value={phone_number_2} onChange={setphone_number_2} />

                  </div>
                </div>


                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Fax No*
                    </label>
                    <InputNumber
                      value={fax}
                      onChange={setfax}
                      max={12}
                      className="all-inputt w-100"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Email*
                    </label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      type="email"
                      className="all-inputt w-100"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Password*
                    </label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      type="password"
                      className="all-inputt w-100"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
              

                <div className="row">
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                      ICD-10 *
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter ICD-10 No"
                        value={icd}
                        onChange={(e) => setIcd(e.target.value)}
                      />
                    </div>
                  </div>


                 


                  <div className="row">
                    <div className="col-lg-6 mt-5">
                      <label htmlFor className="site-labell">
                        Select Insurance*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={insured}
                          onChange={() => {
                            setinsured(true);
                          }}
                          type="radio"
                          id="test6"
                          name="radio-groups"
                        />
                        <label htmlFor="test6">Yes</label>
                      </p>
                      <p className="d-inline-block mr-1">
                        <input
                          type="radio"
                          id="test7"
                          name="radio-groups"
                          value={insured}
                          onChange={() => {
                            setinsured(false);
                          }}
                        />
                        <label htmlFor="test7">No</label>
                      </p>
                    </div>
                  </div>
                </form>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Co. Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Co. Name"
                      value={InsuranceName1}
                      onChange={(e) => {
                        setInsuranceName1(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Group*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Group"
                      value={InsuranceGroup1}
                      onChange={(e) => {
                        setInsuranceGroup1(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Policy No*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance No"
                      value={InsurancePolicyNo1}
                      onChange={(e) => {
                        setInsurancePolicyNo1(e.target.value);
                      }}
                    
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Address*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Address"
                      value={InsuranceAddress1}
                      onChange={(e) => {
                        setInsuranceAddress1(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Co. Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Secondary Insurance Co. Name*"
                      value={InsuranceName2}
                      onChange={(e) => {
                        setInsuranceName2(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Address*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter   Secondary Insurance Address*"
                      value={InsuranceAddress2}
                      onChange={(e) => {
                        setInsuranceAddress2(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Group*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Secondary Insurance Group"
                      value={InsuranceGroup2}
                      onChange={(e) => {
                        setInsuranceGroup2(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Policy No*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Secondary Insurance No"
                      value={InsurancePolicyNo2}
                      onChange={(e) => {
                        setInsurancePolicyNo2(e.target.value);
                      }}
                
                    />
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Policy No*
                    </label>
                    <InputNumber
                      value={policyno}
                      onChange={setpolicyno}
                      max={12}
                      className="all-inputt w-100"
                    />
                  </div>
                </div> */}

               

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Doctor Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Doctor Name"
                      value={provider}
                      onChange={(e) => setprovider(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Company Name"
                      value={companyname}
                      onChange={(e) => setcompanyname(e.target.value)}
                    />
                  </div>
                </div>

            

              
                
                
                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Provider npl Number*
                    </label>
                    <InputNumber
                      value={provider_npl_number}
                      onChange={setprovider_npl_number}
                      max={12}
                      className="all-inputt w-100"
                    />
                  </div>
                </div> <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Provider Address*
                    </label>
                    <input
                      type="text"
                      value={provider_address}
                      onChange={(e) => {
                        setprovider_address(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Provider Address"
                    />
                  </div>
                </div> <div className="row">
                  <div className="col-lg-6 mt-2 phoneInput">
                    <label htmlFor className="site-labell">
                      Provider Phone*
                    </label>
                    <InputPhone value={provider_phone} onChange={setprovider_phone} />

                  </div>
                </div> <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Provider Fax*
                    </label>
                    <input
                      type="text"
                      value={provider_fax}
                      onChange={(e) => {
                        setprovider_fax(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Provider Fax"
                    />
                  </div>
                </div> <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Provider Email*
                    </label>
                    <input
                      type="email"
                      value={provider_email}
                      onChange={(e) => {
                        setprovider_email(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Provider Email"
                    />
                  </div>
                </div> 
              
             
                {/* <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor className="site-labell">
                      Picture Features*
                    </label>
                    <TagsInput
                      style={{ color: 'black' }}
                      value={pictures_features}
                      onChange={handleChange}
                    />
                  </div>
                </div> */}


                <div className="row ">
                  <div className="col-lg-6 mt-2">
                    <label htmlFor>
                      Please Upload User Insurance Card
                      <br></br>
                      <br></br>
                    </label>
                    <div className="file-inpt">
                      <input
                        type="file"
                        accept="application/pdf,application/vnd.ms-excel"
                        onChange={filedocsHandler}
                        style={{width:"100%"}}
                      />
                      {/* <input type="file" onChange={filedocsHandler} /> */}
                      {/* <i className="fas fa-cloud-upload-alt" /> */}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    {!loading ? (
                      <button
                        type="submit"
                        className="general-btn mt-3 px-3"
                        data-toggle="modal"
                        data-target="#user-added"
                        onClick={() => {
                          // image?.name?.length > 0 &&
                          // firstname?.length > 0 &&
                          // lastname?.length > 0 &&
                          // provider?.length > 0 &&
                          // InsuranceAddress1?.length > 0 &&
                          // InsuranceGroup1?.length > 0 &&
                          // InsurancePolicyNo1 > 0 &&
                          // InsuranceName2?.length > 0 &&
                          // InsuranceAddress2?.length > 0 &&
                          // InsuranceGroup2?.length > 0 &&
                          // InsurancePolicyNo2 > 0 &&
                          // InsuranceName1?.length > 0 &&
                          // companyname?.length > 0 &&
                          // policyno?.length > 0 &&
                          // fax?.length > 0 &&
                          // password?.length > 0 &&
                          // gender?.length > 0 &&
                          // address?.length > 0 &&
                          email?.length > 0
                            // bloodtypee?.length > 0 &&
                            // phoneNumber?.length > 0
                            ? addUserHandler()
                            : Toasty(
                              "error",
                              `Please fill out all the required fields`
                            );
                        }}
                      >
                        Add
                      </button>
                    ) : (
                      <i className="fas fa-spinner fa-pulse"></i>
                    )}
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

export default AddUser;
