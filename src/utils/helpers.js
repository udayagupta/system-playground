import avatars from "../data/Avatars.json";

export const getRandomGreeting = (selectedAvatar) => {
    const selectedAvatarIndex = parseInt(selectedAvatar.split("_")[1]) - 1;
    const min = 0;
    const max = Math.floor(avatars[selectedAvatarIndex].greetings.length-1);
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const greetings = avatars[selectedAvatarIndex].greetings;
    
    return greetings[randomIndex];
    
}

export const formateDate = () => {
    const date = new Date(); 
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return date.toLocaleDateString(undefined, options)
}