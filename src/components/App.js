import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <div className="header-text">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;