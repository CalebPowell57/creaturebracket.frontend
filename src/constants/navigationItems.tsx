import Home from "../components/home/home";
import { INavigationItem } from "../interfaces/navigationItem";
import HomeIcon from '@mui/icons-material/Home';
import { Navigate } from "react-router-dom";
import { Handyman, Leaderboard, PersonAdd, Rule } from "@mui/icons-material";
import Picks from "../components/picks/picks";
import Standings from "../components/standings/standings";
import CreatureSubmissions from "../components/creatureSubmissions/creatureSubmissions";
import Tools from "../components/tools/tools";
import { PHASE } from "./phase";

export const navigationItems: INavigationItem[] = [
	{
		path: '/home',
		title: 'Home',
		node: <Home/>,
		icon: <HomeIcon/>,
		hasNavigation: true,
		phasesShown: [PHASE.Seeded],
	},
	{
		path: '/creature-submissions',
		title: 'Creature Submissions',
		node: <CreatureSubmissions/>,
		icon: <PersonAdd/>,
		hasNavigation: true,
		phasesShown: [PHASE.CreatureSubmission],
	},
	{
		path: '/picks',
		title: 'Picks',
		node: <Picks/>,
		icon: <Rule/>,
		hasNavigation: true,
		phasesShown: [PHASE.Seeded],
	},
	{
		path: '/standings',
		title: 'Standings',
		node: <Standings/>,
		icon: <Leaderboard/>,
		hasNavigation: true,
		phasesShown: [PHASE.Seeded],
	},
	{
		path: '/tools',
		title: 'Tools',
		node: <Tools/>,
		icon: <Handyman/>,
		hasNavigation: true,
	},
	{
		path: '/',
		node: <Navigate to='home'/>,
	},
]