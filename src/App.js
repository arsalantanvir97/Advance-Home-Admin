import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddDoctor from "./Screens/AddDoctor";
import AddLabortary from "./Screens/AddLabortary";
import AddLabTechnician from "./Screens/AddLabTechnician";
import AddTest from "./Screens/AddTest";
import AddUser from "./Screens/AddUser";
import Booking from "./Screens/Booking";
import BookingDetail from "./Screens/BookingDetail";
import ChangePassword from "./Screens/ChangePassword";
import ContentManagement from "./Screens/ContentManagement";
import Dashboard from "./Screens/Dashboard";
import Doctor from "./Screens/Doctor";
import DoctorRooster from "./Screens/DoctorRooster";
import DoctorVerification from "./Screens/DoctorVerification";
import EditContentManagement from "./Screens/EditContentManagement";
import EditDoctor from "./Screens/EditDoctor";
import EditLabTEchnician from "./Screens/EditLabTEchnician";
import EditLabortary from "./Screens/EditLabortary";
import EditProfile from "./Screens/EditProfile";
import EditTest from "./Screens/EditTest";
import Feedback from "./Screens/Feedback";
import FeedbackDetail from "./Screens/FeedbackDetail";
import LabTechnician from "./Screens/LabTechnician";
import LabTechnicianDetails from "./Screens/LabTechnicianDetails";
import Labortaries from "./Screens/Labortaries";
import LabortaryDetails from "./Screens/LabortaryDetails";
import Login from "./Screens/Login";
import Notification from "./Screens/Notification";
import PaymentDetail from "./Screens/PaymentDetail";
import Profile from "./Screens/Profile";
import TestDetail from "./Screens/TestDetail";
import TestManagement from "./Screens/TestManagement";
import User from "./Screens/User";
import ViewDoctor from "./Screens/ViewDoctor";
import ViewFeedback from "./Screens/ViewFeedback";
import ViewUser from "./Screens/ViewUser";
import PrivateRoute from "./components/PrivateRoute";
import CategoryManagement from "./Screens/CategoryManagement";
import AddCategory from "./Screens/AddCategory";


const App = () => {
  return (
    <Router basename="/advancehomeadmin/admin">
      <Route path="/" component={Login} exact />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />{" "}
      <PrivateRoute exact path="/Notification" component={Notification} />{" "}
      <PrivateRoute exact path="/AddDoctor" component={AddDoctor} />{" "}
      <PrivateRoute exact path="/AddLabortary" component={AddLabortary} />{" "}
      <PrivateRoute
        exact
        path="/AddLabTechnician"
        component={AddLabTechnician}
      />{" "}
      <PrivateRoute exact path="/AddTest" component={AddTest} />{" "}
      <PrivateRoute exact path="/AddCategory" component={AddCategory} />{" "}

      <PrivateRoute exact path="/AddUser" component={AddUser} />{" "}
      <PrivateRoute exact path="/Booking" component={Booking} />{" "}
      <PrivateRoute exact path="/BookingDetail/:id" component={BookingDetail} />{" "}
      <PrivateRoute exact path="/ChangePassword" component={ChangePassword} />{" "}
      <PrivateRoute
        exact
        path="/ContentManagement"
        component={ContentManagement}
      />{" "}
      <PrivateRoute exact path="/Doctor" component={Doctor} />{" "}
      <PrivateRoute exact path="/DoctorRooster/:id" component={DoctorRooster} />{" "}
      <PrivateRoute
        exact
        path="/DoctorVerification/:id"
        component={DoctorVerification}
      />{" "}
      <PrivateRoute
        exact
        path="/EditContentManagement"
        component={EditContentManagement}
      />{" "}
      <PrivateRoute exact path="/EditDoctor/:id" component={EditDoctor} />{" "}
      <PrivateRoute
        exact
        path="/EditLabTEchnician/:id"
        component={EditLabTEchnician}
      />{" "}
      <PrivateRoute exact path="/EditLabortary/:id" component={EditLabortary} />{" "}
      <PrivateRoute exact path="/EditProfile" component={EditProfile} />{" "}
      <PrivateRoute exact path="/EditTest/:id" component={EditTest} />{" "}
      <PrivateRoute exact path="/Feedback" component={Feedback} />{" "}
      <PrivateRoute
        exact
        path="/FeedbackDetail/:id"
        component={FeedbackDetail}
      />{" "}
      <PrivateRoute exact path="/LabTechnician" component={LabTechnician} />{" "}
      <PrivateRoute
        exact
        path="/LabTechnicianDetails/:id"
        component={LabTechnicianDetails}
      />{" "}
      <PrivateRoute exact path="/Labortaries" component={Labortaries} />{" "}
      <PrivateRoute
        exact
        path="/LabortaryDetails"
        component={LabortaryDetails}
      />{" "}
      <PrivateRoute exact path="/PaymentDetail/:id" component={PaymentDetail} />{" "}
      <PrivateRoute exact path="/Profile" component={Profile} />{" "}
      <PrivateRoute exact path="/TestDetail" component={TestDetail} />{" "}
      <PrivateRoute exact path="/TestManagement" component={TestManagement} />{" "}
      <PrivateRoute exact path="/CategoryManagement" component={CategoryManagement} />{" "}

      <PrivateRoute exact path="/User" component={User} />{" "}
      <PrivateRoute exact path="/ViewDoctor/:id" component={ViewDoctor} />{" "}
      <PrivateRoute exact path="/ViewFeedback" component={ViewFeedback} />{" "}
      <PrivateRoute exact path="/ViewUser/:id" component={ViewUser} />{" "}
    </Router>
  );
};

export default App;
