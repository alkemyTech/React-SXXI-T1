import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, returnToHome: props.returnToHome };
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

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent;
    }

    return this.props.children;
  }
}
