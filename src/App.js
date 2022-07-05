import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from "../src/pages/MainPage";
import PostView from "../src/pages/PostView";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

import data from "./data.json"

import './global.css'

function App() {
	return(
		<BrowserRouter basename="/">
			<Header />
			<Switch>
				<Route exact path="/">
					<MainPage data={data}/>
				</Route> 
				<Route path="/post">						
					<PostView/>
				</Route> 
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}


export default App;