import avatars from "../data/Avatars.json";

export const getRandomGreeting = (selectedAvatar) => {
  const selectedAvatarIndex = parseInt(selectedAvatar.split("_")[1]) - 1;
  const min = 0;
  const max = Math.floor(avatars[selectedAvatarIndex].greetings.length - 1);
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  const greetings = avatars[selectedAvatarIndex].greetings;

  return greetings[randomIndex] || "I think something went wrong here...";
};

export const formateDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return {
    actualDate: date.toLocaleDateString(),
    formattedDate: date.toLocaleDateString(undefined, options),
  };
};

export const isCharacterPresent = (characters, characterId) => {
  const isIdEqual = (c) => {
    return c.id === characterId;
  };
  return characters.find(isIdEqual);
};


export const close = (setToggleForm) => {
    setToggleForm(false);
  }

export  const confirmCharacter = (character, addCharacter, setCurrentPlayer, addNotification, setToggleForm) => {
    const result = addCharacter(character);
    if (result.success) setCurrentPlayer(character);

    addNotification(result);
    setToggleForm(false);
  }