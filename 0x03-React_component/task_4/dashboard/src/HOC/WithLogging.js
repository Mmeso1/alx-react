import React from "react";

const withLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return WithLogging;
};

export default withLogging;
