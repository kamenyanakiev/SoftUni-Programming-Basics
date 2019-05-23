function gymnastics(input) {
  let country = input[0];
  let type = input[1];
  let grade = 0;
  let points = 0;
  if (country === 'Russia'){
    if (type === 'ribbon'){
      grade = 9.100 + 9.400;
    } else if (type === 'hoop'){
      grade = 9.300 + 9.800;
    } else if (type === 'rope'){
      grade = 9.600 + 9.000;
    }
  } else if (country === 'Bulgaria'){
    if (type === 'ribbon'){
      grade = 9.400 + 9.600;
    } else if (type === 'hoop'){
      grade = 9.550 +  9.750;
    } else if (type === 'rope'){
      grade = 9.500 + 9.400;
    }
  } else if (country === 'Italy'){
    if (type === 'ribbon'){
      grade = 9.200 + 9.500;
    } else if (type === 'hoop'){
      grade = 9.450 + 9.350;
    } else if (type === 'rope'){
      grade = 9.700 + 9.150;
    }
  }
  points = 20 - grade;
  points = (points / 20) * 100;
  console.log(`The team of ${country} get ${grade.toFixed(3)} on ${type}.`);
  console.log(`${points.toFixed(2)}%`);
}
gymnastics(['Bulgaria', 'ribbon']);