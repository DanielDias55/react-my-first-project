import { useEffect, useState } from "react";

export default function GameForm({ onSubmit, onCancel, game }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [players, setPlayers] = useState("");
  const [image, setImage] = useState("");

  // Populate form fields with game data if available
  useEffect(() => {
    if (game) {
      game.name && setName(game.name);
      game.genre && setGenre(game.genre);
      game.difficulty && setDifficulty(game.difficulty);
      game.playtime && setPlaytime(game.playtime);
      game.players && setPlayers(game.players);
      game.image && setImage(game.image);
    }
  }, [game]);

  function handleOnSubmit(event) {
    event.preventDefault();

    // Validation checks
    if (!name || !genre || !difficulty || !playtime || !players) {
      alert("Please fill out all the fields");
      return;
    } else if (!image) {
      alert("Please paste an image URL");
      return;
    } else if (!image.startsWith("http")) {
      alert("Please paste a valid image URL");
      return;
    }

    // If validation passes, prepare the game object and submit
    const updatedGame = {
      name: name,
      genre: genre,
      difficulty: difficulty,
      playtime: playtime,
      players: players,
      image: image,
    };

    // Call the parent onSubmit function with game data
    onSubmit(updatedGame);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Game Name</label>
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Type a game name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="genre">Genre</label>
      <input
        id="genre"
        type="text"
        value={genre}
        placeholder="Type a genre"
        onChange={(e) => setGenre(e.target.value)}
      />

      <label htmlFor="difficulty">Difficulty</label>
      <input
        id="difficulty"
        type="text"
        value={difficulty}
        placeholder="Type a difficulty"
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <label htmlFor="playtime">Playtime</label>
      <input
        id="playtime"
        type="text"
        value={playtime}
        placeholder="Type playtime (e.g., 30 minutes)"
        onChange={(e) => setPlaytime(e.target.value)}
      />

      <label htmlFor="players">Players</label>
      <input
        id="players"
        type="text"
        value={players}
        placeholder="Number of players (e.g., 2-4)"
        onChange={(e) => setPlayers(e.target.value)}
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="url"
        value={image}
        placeholder="Paste image URL"
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Image preview */}
      <label htmlFor="image-preview"></label>
      <img
        id="image-preview"
        className="image-preview"
        src={image || "https://placehold.co/600x400?text=Paste+an+image+URL"}
        alt="Game Image"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/600x400?text=Error+loading+image")
        }
      />

      <div className="btns">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">{game ? "Save" : "Create"}</button>
      </div>
    </form>
  );
}
