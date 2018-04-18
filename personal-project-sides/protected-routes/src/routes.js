// import React from "react";
// import { Switch, Route } from "react-router-dom";

// import UserDash from "./components/UserDash";
// import LandingPage from "./components/LandingPage";
// import ProfilePage from "./components/ProfilePage";

// export default (
//   <Switch>
//     <Route
//       exact
//       path="/"
//       render={() =>
//         this.props.user.first_name ? (
//           <Route component={UserDash} />
//         ) : (
//           <Route component={LandingPage} />
//         )
//       }
//     />
//     <Route />
//     <Route
//       to="/profile"
//       component={
//         this.props.user.first_name ? (
//           <Route component={ProfilePage} />
//         ) : (
//           <div>
//             <p>You don't have an account!.</p>
//             <button>Create one here</button>
//           </div>
//         )
//       }
//     />
//   </Switch>
// );
