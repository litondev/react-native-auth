import React from "react";

export default [
	{
		name : "Signin",
		component : React.lazy(() => import('./views/Signin'))
	},
	{
		name : "ForgotPassword",
		component : React.lazy(() => import('./views/ForgotPassword'))
	},
	{
		name : "Signup",
		component : React.lazy(() => import('./views/Signup'))
	},
	{
		name : "KeyForgotPassword",
		component : React.lazy(() => import('./views/KeyForgotPassword'))
	},
	{
		name : "Dashboard",
		component : React.lazy(() => import('./views/Dashboard'))
	}
];