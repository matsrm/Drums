const drumElements = {
    "boom": "boom-sound",
    "clap": "clap-sound",
    "hihat": "hihat-sound",
    "kick": "kick-sound",
    "openhat": "openhat-sound",
    "ride": "ride-sound",
    "snare": "snare-sound",
    "tink": "tink-sound",
  };
  
  for (const buttonId in drumElements) {
    const button = document.getElementById(buttonId);
    const soundId = drumElements[buttonId];
    const sound = document.getElementById(soundId);
  
    button.addEventListener("click", () => playSound(sound));
  }
  
  document.addEventListener("keydown", (event) => {
    for (const buttonId in drumElements) {
      if (event.key === buttonId.charAt(0)) {
        const soundId = drumElements[buttonId];
        const sound = document.getElementById(soundId);
        playSound(sound);
        break; 
      }
    }
  });
  
  function playSound(sound) {
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }