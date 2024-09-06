import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  // Handle click event to navigate to game detail page
  function handleClick() {
    navigate(`/games/${game?.id}`);
  }

  return (
    <article className="game-card" onClick={handleClick}>
      <img
        src={
          game?.image || "https://placehold.co/600x400?text=Error+loading+image"
        }
        alt={game?.name || "Unknown Game"}
      />
      <h2>{game?.name || "Unknown Game"}</h2>
      <p className="genre">
        {game?.genre ? `Genre: ${game.genre}` : "Unknown Genre"}
      </p>
      <p className="difficulty">
        {game?.difficulty
          ? `Difficulty: ${game.difficulty}`
          : "Unknown Difficulty"}
      </p>
      <p className="players">
        {game?.players ? `Players: ${game.players}` : "Players Unknown"}
      </p>
      <p className="playtime">
        {game?.playtime ? `Playtime: ${game.playtime}` : "Playtime Unknown"}
      </p>
      <p className="location">
        {game?.location ? `Location: ${game.location}` : "Location Unknown"}
      </p>
    </article>
  );
}
