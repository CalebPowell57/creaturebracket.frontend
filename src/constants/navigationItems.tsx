import Home from "../components/home/home";
import { INavigationItem } from "../interfaces/navigationItem";
import HomeIcon from '@mui/icons-material/Home';
import { Navigate } from "react-router-dom";
import { Leaderboard, Rule } from "@mui/icons-material";

export const navigationItems: INavigationItem[] = [
	{
		path: '/home',
		title: 'Home',
		node: <Home/>,
		icon: <HomeIcon/>,
		bottomNavigation: true,
	},
	{
		path: '/picks',
		title: 'Picks',
		node: <Home/>,
		icon: <Rule/>,
		bottomNavigation: true,
	},
	{
		path: '/standings',
		title: 'Standings',
		node: <Home/>,
		icon: <Leaderboard/>,
		bottomNavigation: true,
	},
	{
		path: '/',
		node: <Navigate to='home'/>,
	},
]