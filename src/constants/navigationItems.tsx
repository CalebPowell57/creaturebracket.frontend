import Home from "../components/home/home";
import { INavigationItem } from "../interfaces/navigationItem";
import HomeIcon from '@mui/icons-material/Home';
import { Navigate } from "react-router-dom";
import { Leaderboard, Rule } from "@mui/icons-material";
import Picks from "../components/picks/picks";
import Standings from "../components/standings/standings";
import NewBracket from "../components/newBracket/newBracket";

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
		node: <Picks/>,
		icon: <Rule/>,
		bottomNavigation: true,
	},
	{
		path: '/standings',
		title: 'Standings',
		node: <Standings/>,
		icon: <Leaderboard/>,
		bottomNavigation: true,
	},
	{
		path: '/new-bracket',
		node: <NewBracket/>,
	},
	{
		path: '/',
		node: <Navigate to='home'/>,
	},
]