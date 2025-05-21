import { useEffect, useState } from "react";
import "./pokemon.css";
import { PokemonCards } from "./pokemonCards";

export const Pokemon = () => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState("");

	const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

	const fetchPokemonApi = async () => {
		try {
			const res = await fetch(API);
			const data = await res.json();

			const detailedPokemonData = data.results.map(
				async (currPokemon) => {
					const res = await fetch(currPokemon.url);
					const data = await res.json();
					return data;
				}
			);
			const detailedResponds = await Promise.all(detailedPokemonData);
			setPokemon(detailedResponds);

			setLoading(false);
		} catch (error) {
			console.log(`Api fetching error : ${error}`);
			setLoading(false);
			setError(error);
		}
	};

	useEffect(() => {
		fetchPokemonApi();
	}, []);

	if (loading) {
		return (
			<div>
				<h1 className="mt-40">Loading...</h1>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h1>{error.message}</h1>
			</div>
		);
	}
	// search functionality
	const searchData = pokemon.filter((curSearch) =>
        curSearch.name.toLowerCase().includes(search.toLowerCase())
	);

    console.log(searchData);
    
	return (
		<>
			<section className="container">
				<header>
					<h1>Lets Catch Pokemon</h1>
				</header>
				<div className="pokemon-search">
					<input
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div>
					<ul className="cards">
						{searchData.map((currPokemon) => {
							return (
								<PokemonCards
									key={currPokemon.id}
									pokemonData={currPokemon}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};
