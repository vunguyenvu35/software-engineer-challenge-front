import "./App.css"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./layouts/home/Home"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" render={props => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
