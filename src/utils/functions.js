// Fisher–Yates Shuffle

export const shuffleArray = (array) => {
   let m = array.length;

   // While there remain elements to shuffle…
   while (m) {
      // Pick a remaining element between 0 and array.length
      const randomIndex = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      const temp = array[m];
      array[m] = array[randomIndex];
      array[randomIndex] = temp;
   }

   return array;
};
