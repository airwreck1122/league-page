import { get } from 'svelte/store';
import {leagueData} from '$lib/stores';

export const leagueID = "726269075449266176"; // your league ID
export const leagueName = "Elmwood Park Fantasy League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

export const getLeagueData = async (queryLeagueID = leagueID) => {
	if(get(leagueData)[queryLeagueID]) {
		return get(leagueData)[queryLeagueID];
	}
    const res = await fetch(`https://api.sleeper.app/v1/league/${queryLeagueID}`, {compress: true}).catch((err) => { console.error(err); });
	const data = await res.json().catch((err) => { console.error(err); });
	
	if (res.ok) {
		leagueData.update(ld => {ld[queryLeagueID] = data; return ld});
		return data;
	} else {
		throw new Error(data);
	}
}
