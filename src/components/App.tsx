import React, { useState } from 'react';
import LitteraProvider from "react-littera";
import { ThemeProvider } from "react-jss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home as HomePage, Post as PostPage, Wrong as WrongPage } from "../pages";
import DynamicTheme from "../utils/theme";

function App() {
  const [locale, setLocale] = useState("en_US");

  return (
    <div className="App">
      <ThemeProvider theme={new DynamicTheme()}>
        <LitteraProvider language={locale} setLanguage={setLocale}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/p/:id" component={PostPage} />
              <Route component={WrongPage} />
            </Switch>
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
