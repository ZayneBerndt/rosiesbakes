import React from "react";
import "../assets/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.buttonRef = React.createRef();
    this.menuRef = React.createRef();
  }

  toggleMenu() {
    console.log(this.state.isActive);
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  openMenu() {
    this.setState({ isActive: true });
  }

  closeMenu() {
    this.setState({ isActive: false });
  }

  handleBlur() {
    const self = this;
    self.blurTimer = setTimeout(function() {
      const buttonNode = self.buttonRef.current;
      const activeEl = buttonNode.ownerDocument.activeElement;
      if (buttonNode && activeEl === buttonNode) return self.closeMenu();
      const menuNode = self.menuRef.current;
      if (menuNode === activeEl) {
        return;
      }
      if (menuNode && menuNode.contains(activeEl)) return;
      if (self.state.isActive) self.closeMenu();
    }, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="drop-down"
          onClick={() => this.toggleMenu()}
          onFocus={() => this.openMenu()}
          onBlur={() => this.handleBlur()}
          tabIndex="0"
        >
          <div className="toggle" ref={this.buttonRef}>
            Menu
          </div>
          {this.state.isActive && (
            <ul className="menu" ref={this.menuRef}>
              <li className="menu-item" tabIndex="0">
                Home
              </li>
              <li className="menu-item" tabIndex="0">
                Profile
              </li>
              <li className="menu-item" tabIndex="0">
                Account
              </li>
              <li className="menu-item" tabIndex="0">
                Sign out
              </li>
            </ul>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
