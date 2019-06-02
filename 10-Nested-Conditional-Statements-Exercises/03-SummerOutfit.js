function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeOfDay = input[1];
  if (degrees >= 10 && degrees <= 18) {
    if (timeOfDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
    } else if (timeOfDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeOfDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (timeOfDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (timeOfDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeOfDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  } else if (degrees > 24) {
    if (timeOfDay === "Morning") {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (timeOfDay === "Afternoon") {
      console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
    } else if (timeOfDay === "Evening") {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    }
  }
}
summerOutfit([16, "Morning"]);
