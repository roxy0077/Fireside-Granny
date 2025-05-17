const responses = {
  rain: "Oh dear, don’t forget your umbrella! These old bones ache in this weather.",
  night: "It’s late, child. Don’t stay up too long staring at glowing boxes.",
  sneeze: "Bless you! You’d better not be catching cold, drink some ginger tea.",
  forgot: "You forgot again? Tsk tsk, I always say—tie a string to your finger.",
  visit: "Ah, you came to see me! Warm your hands by the fire, I’ve just made some tea."
};

function respond(context) {
  const box = document.getElementById('responseBox');
  box.textContent = 'Granny: ' + (responses[context] || "Hmm? What was that, dear?");
}
