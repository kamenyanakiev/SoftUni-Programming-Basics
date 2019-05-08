function cinemaWeek(input) {
  let movie = input[0];
  let hall = input[1];
  let people = Number(input[2]);
  let price = 0;
  let totalPrice = 0;
  if(movie === 'A Star Is Born'){
    if(hall === 'normal'){
      price = 7.50;
    } else if(hall === 'luxury'){
      price = 10.50;
    } else if(hall === 'ultra luxury'){
      price = 13.50;
    }
  } else if(movie === 'Bohemian Rhapsody'){
    if(hall === 'normal'){
      price = 7.35;
    } else if(hall === 'luxury'){
      price = 9.45;
    } else if(hall === 'ultra luxury'){
      price = 12.75;
    }
  } else if(movie === 'Green Book'){
    if(hall === 'normal'){
      price = 8.15;
    } else if(hall === 'luxury'){
      price = 10.25;
    } else if(hall === 'ultra luxury'){
      price = 13.25;
    }
  }
  else if(movie === 'The Favourite'){
    if(hall === 'normal'){
      price = 8.75;
    } else if(hall === 'luxury'){
      price = 11.55;
    } else if(hall === 'ultra luxury'){
      price = 13.95;
    }
  }
  totalPrice = price * people;
  console.log(`${movie} -> ${(totalPrice).toFixed(2)} lv.`);
}
cinemaWeek(['A Star Is Born', 'luxury', 42]);