import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

export default function HomePage() {
  const mySecretData = [
    {
      id: "1725621281233",
      name: "Monopoly (ENG)",
      location: "I1",
      playtime: "120+ min",
      players: "4-8+ Players",
      difficulty: "Difficult",
      genre: "Family/Party  -  Strategy",
      image:
        "https://cf.geekdo-images.com/r1JZAbaud0TEPrlj7QUaEw__imagepage/img/BiBpW5Ccorc6oNjOxfVmK7D5wyA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7188530.jpg",
    },
    {
      id: "1725621462226",
      name: "Master Thief (ENG)",
      location: "I3",
      playtime: "20-30min",
      players: "4-6 players",
      difficulty: "Easy",
      genre: "Strategy - Bluffing",
      image:
        "https://cf.geekdo-images.com/41zSPGL99cSqmDEqwAKvng__imagepage/img/lzvtnjbgerbNZd1bn3p6zJVU6H4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3852200.png",
    },
    {
      id: "1725621611492",
      name: "Catan (SPA)",
      location: "G3",
      playtime: "120+ min",
      players: "4-8+ players",
      difficulty: "Medium",
      genre: "Family/Party - Strategy",
      image:
        "https://cf.geekdo-images.com/fiGYEuijlU_Lza7VQh1bnQ__imagepage/img/fX75W_jrp3P4i_8GRxApuEQVzr4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic808156.jpg",
    },
    {
      id: "1725621979544",
      name: "Bezzerwizzer (ENG)",
      location: "I2",
      playtime: "60-90 min",
      players: "3-5 players",
      difficulty: "Medium",
      genre: "Trivia - Strategy",
      image:
        "https://cf.geekdo-images.com/pw32Dn06DTd0ALMVtIuJOw__imagepage/img/vbzhtUxYzMHKPqt5dqciJfPsSqg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2280073.jpg",
    },
    {
      id: "1725622060371",
      name: "Exploding Kittens (ENG)",
      location: "I4",
      playtime: "20-30min",
      players: "2-5 players",
      difficulty: "Easy",
      genre: "Party Games - Strategy",
      image:
        "https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__imagepage/img/qdivOjtkEd8Jma35bdI3mOwaoZg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2691976.png",
    },
    {
      id: "1725622127392",
      name: "Partners (DK)",
      location: "D1",
      playtime: "60-90min",
      players: "2-4 players",
      difficulty: "Medium",
      genre: "Team Play - Strategy",
      image:
        "https://cf.geekdo-images.com/qBws3yrc4G4kYqPaSs38Xg__imagepage/img/kdPW8CEvpGhAX72CXGoIRXlXu1c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4671560.jpg",
    },
    {
      id: "1725622207951",
      name: "Ego (DK)",
      location: "D2",
      playtime: "30-60min",
      players: "2-5 players",
      difficulty: "Easy",
      genre: "Family/Party - Psychological",
      image:
        "https://cf.geekdo-images.com/DcaIm4e_2s4KaVorv6W2Ig__imagepage/img/uCRiUWzN8XQKXnR3cF32_CJ82M0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7594649.jpg",
    },
    {
      id: "1725622278183",
      name: "Targi (DK)",
      location: "D3",
      playtime: "25-50min",
      players: "2+ Players",
      difficulty: "Medium",
      genre: "Family/Party - Strategy",
      image:
        "https://cf.geekdo-images.com/FuVYgLqXyMrgEIigXK927w__imagepage/img/gULVmikoVGk8E_-vEYdL2QrB8t0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1204085.jpg",
    },
    {
      id: "1725622347747",
      name: "Cascadia (DK)",
      location: "D4",
      playtime: "30-60min",
      players: "2-4 players",
      difficulty: "Medium",
      genre: "Abstract - Strategy",
      image:
        "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__imagepage/img/0ksox22FKLq-Z-rsbBlF2IDG9x0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5100691.jpg",
    },
  ];

  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilterType, setSelectedFilterType] = useState(""); // For selecting filter type (genre, location, etc.)
  const [selectedFilterValue, setSelectedFilterValue] = useState(""); // For the value of the selected filter
  const [sortBy, setSortBy] = useState("name"); // Sorting state

  useEffect(() => {
    getGames();

    async function getGames() {
      //Rigos little hack

      if (!localStorage.getItem("games")) {
        localStorage.setItem("games", JSON.stringify(mySecretData));
      }

      ////

      const data = localStorage.getItem("games"); //mySecretData;

      let gamesData = [];

      if (data) {
        gamesData = JSON.parse(data);
      }

      // Default sort by name
      gamesData.sort((game1, game2) => game1.name.localeCompare(game2.name));
      setGames(gamesData);
    }
  }, []);

  // Extract unique values for each filter
  const genres = [...new Set(games.map((game) => game.genre))];
  const locations = [...new Set(games.map((game) => game.location))];
  const players = [...new Set(games.map((game) => game.players))];
  const playtimes = [...new Set(games.map((game) => game.playtime))];
  const difficulties = [...new Set(games.map((game) => game.difficulty))];
  const brands = [...new Set(games.map((game) => game.brand))];

  // Prepare filter options dynamically based on selectedFilterType
  let filterOptions = [];
  if (selectedFilterType === "genre") filterOptions = genres;
  if (selectedFilterType === "location") filterOptions = locations;
  if (selectedFilterType === "players") filterOptions = players;
  if (selectedFilterType === "playtime") filterOptions = playtimes;
  if (selectedFilterType === "difficulty") filterOptions = difficulties;
  if (selectedFilterType === "brand") filterOptions = brands;

  // Filter games based on the search term, selected filter type, and selected value
  let filteredGames = games.filter((game) => {
    const nameMatches = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Apply the dynamic filter based on the selected type
    const filterMatches = selectedFilterValue
      ? game[selectedFilterType] === selectedFilterValue
      : true;

    return nameMatches && filterMatches;
  });

  // Sort games based on the selected sortBy value (name, genre, difficulty)
  filteredGames.sort((game1, game2) =>
    game1[sortBy].localeCompare(game2[sortBy])
  );

  return (
    <div className="page">
      <form className="grid-filter" role="search">
        {/* Search by name */}
        <label>
          Search by Name:
          <input
            placeholder="Search"
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        {/* Single dropdown to choose which filter to apply */}
        <label>
          Filter by:
          <select
            onChange={(e) => setSelectedFilterType(e.target.value)}
            value={selectedFilterType}
          >
            <option value="">Select Filter</option>
            <option value="genre">Genre</option>
            <option value="location">Location</option>
            <option value="players">Players</option>
            <option value="playtime">Playtime</option>
            <option value="difficulty">Difficulty</option>
            <option value="brand">Brand</option>
          </select>
        </label>

        {/* Dynamically rendered dropdown to select the filter value */}
        {selectedFilterType && (
          <label>
            Select{" "}
            {selectedFilterType.charAt(0).toUpperCase() +
              selectedFilterType.slice(1)}
            :
            <select
              onChange={(e) => setSelectedFilterValue(e.target.value)}
              value={selectedFilterValue}
            >
              <option value="">All {selectedFilterType}</option>
              {filterOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* Dropdown to sort by category */}
        <label>
          Sort by:
          <select name="sort-by" onChange={(e) => setSortBy(e.target.value)}>
            <option value="most popular">Most popular</option>
            <option value="New In">New In</option>
            <option value="brand a to z">Brand (A to Z)</option>
            <option value="brand z to a">Brand (Z to A)</option>
          </select>
        </label>
      </form>

      <section className="grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
}
