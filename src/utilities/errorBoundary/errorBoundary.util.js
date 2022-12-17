import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, returnToHome: props.returnToHome, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.returnToHome !== state.returnToHome) {
      return { hasError: false, resetCondition: props.resetCondition };
    }

    return null;
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent;
    }

    if (this.state.errorInfo) {
      this.setState({
        error: null,
        errorInfo: null,
      });

      return <SpinnerLoad />;
    }

    return this.props.children;
  }
}
