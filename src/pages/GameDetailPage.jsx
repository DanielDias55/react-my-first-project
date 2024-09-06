import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameCard from "../components/GameCard";

export default function GameDetailPage() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const game = gamesData.find((game) => game.id === id);
    setGame(game);
  }, [id]);

  function showDeleteDialog() {
    const shouldDelete = window.confirm(
      `Do you want to delete "${game.name}"?`
    );
    if (shouldDelete) {
      deleteGame();
    }
  }

  function deleteGame() {
    const data = localStorage.getItem("games");
    const gamesData = JSON.parse(data) || [];
    const updatedGames = gamesData.filter((game) => game.id !== id);
    localStorage.setItem("games", JSON.stringify(updatedGames));
    navigate("/");
  }

  function showUpdate() {
    navigate(`/games/${id}/update`);
  }

  return (
    <section id="game-page" className="page">
      <div className="container">
        <h1>{game.name}</h1>
        <GameCard game={game} />
        <div className="btns">
          <button className="btn-cancel" onClick={showDeleteDialog}>
            Delete Game
          </button>
          <button onClick={showUpdate}>Update Game</button>
        </div>
      </div>
    </section>
  );
}
