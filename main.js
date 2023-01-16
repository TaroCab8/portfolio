import React, {render} from "react"
import ReactDOMServer from "react-dom"
import App from "./App"

ReactDOMServer.render(<App/>, document.querySelector("#root"))