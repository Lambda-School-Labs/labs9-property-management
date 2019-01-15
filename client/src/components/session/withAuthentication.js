import React from "react";
import AuthUserContext from "./Context";
import { withFirebase } from "../firebase";

const withAuthentication = Component => {
  class withAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: JSON.parse(localStorage.getItem("authUser"))
      };
    }

    componentDidMount() {
      console.log("storage: ", this.state.authUser);
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          console.log("listen: ", authUser);
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        } else {
          localStorage.setItem("authUser", null);
          this.setState({ authUser: null });
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />;
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(withAuthentication);
};

export default withAuthentication;