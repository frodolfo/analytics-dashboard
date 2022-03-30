import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Dashboard from "./pages/Dashboard"

ReactDOM.render(
    <Dashboard />,
    document.getElementById('app-root'),
)
