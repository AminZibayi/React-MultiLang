/* In the Name of Allah */

import React from "react";

class Determinator extends React.Component {

  state = {
    lang: null,
    data: typeof this.props.children === "object"
      ? this.props.children
      : {}
  };

  addData = lang => content => {
    this.setState(state => ({
      data: {
        ...state.data,
        [lang]: content
      }
    }));
  }

  handleLanguage = lang => {
    this.setState({lang});
  }

  componentWillMount() {
    document.addEventListener("language", e => {
      this.handleLanguage(e.detail);
    });
    if (typeof this.props.children === "function") 
      document.addEventListener("language", e => {
        this.props.children(e.detail, this.addData(e.detail));
      })
  }

  render() {
    const {children} = this.props;

    if (typeof children === "string") 
      return children;
    else if (typeof children !== "object" && typeof children !== "function") 
      throw new TypeError('MultiLang: Excepted an object or a function or a string but recieved ' + typeof children);
    
    return this.state.data[this.state.lang] || this.props.till;
  };
};

export default Determinator;