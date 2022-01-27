import axios from 'axios'
import { Cookies } from "react-cookie-consent"

// URL BASE

const API = axios.create({
	baseURL: "http://localhost:8080"
});

// Happens on every request and before the request
API.interceptors.request.use( (req: any) => {
	if (Cookies.get('profile')) { // Add token to the header
		req.headers.Authorization = `Bearer ${ JSON.parse(Cookies.get('profile')).token }`
	}

	return req
})
