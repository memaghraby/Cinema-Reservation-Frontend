import React, { createContext, Component } from "react";
import axios from "axios";
export const ConfigContext = createContext();
/** Class of Configrations to the base URL to switch between backend and mocking service.
 * @extends Component
 */
class ConfigContextProvider extends Component {
  state = {
    /**baseURL of requests
     * @memberof ConfigContextProvider
     *
     */
    baseURL: "http://localhost:8080",

  };
  componentDidMount() {
    axios.defaults.baseURL = "http://localhost:8080";
  }

  render() {
    return (
      <ConfigContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ConfigContext.Provider>
    );
  }
}

export default ConfigContextProvider;