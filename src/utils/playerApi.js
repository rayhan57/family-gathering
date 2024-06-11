import app from "../app/firebase";
import { get, getDatabase, push, ref, set } from "firebase/database";

export const addPlayer = async (player, onSuccess) => {
  const db = getDatabase(app);
  const newPlayer = push(ref(db, "players"));
  set(newPlayer, player)
    .then(() => onSuccess())
    .catch((error) => console.error(error));
};

export const getPlayers = async () => {
  const db = getDatabase(app);
  const playersRef = ref(db, "players");
  const snapshot = await get(playersRef);
  const players = snapshot.val() || {};
  return Object.keys(players).map((key) => ({ ...players[key], id: key }));
};

export const getPlayerById = async (id) => {
  const db = getDatabase(app);
  const playerRef = ref(db, `players/${id}`);
  const snapshot = await get(playerRef);
  const player = snapshot.val();
  return player;
};

export const updatePlayerById = async (id, player, onSuccess) => {
  const db = getDatabase(app);
  const playerRef = ref(db, `players/${id}`);
  set(playerRef, player)
    .then(() => onSuccess())
    .catch((error) => console.error(error));
};

export const deletePlayerById = async (id, onSuccess) => {
  const db = getDatabase(app);
  const playerRef = ref(db, `players/${id}`);
  set(playerRef, null)
    .then(() => onSuccess())
    .catch((error) => console.error(error));
};
