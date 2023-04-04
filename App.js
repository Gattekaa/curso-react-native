import React from "react"
import { Provider } from 'react-redux'
import MenuNavigator from "./src/Navigator"
import storeConfig from "./src/store/storeConfig"
const store = storeConfig()
import {name as appName} from './app.json'

const Redux = () => (
    <Provider store={store}>
        <MenuNavigator />
    </Provider> 
)

export default Redux