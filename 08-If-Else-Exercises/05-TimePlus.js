function timePlus(input) {
  let hour = Number(input[0]);
  let minutes = Number(input[1]);

    let date = new Date();
    date.setHours(hour);
    date.setMinutes(minutes + 15);
    let resultHours = date.getHours();
    let resultMinutes = date.getMinutes();
    if (resultMinutes < 10 ){
      resultMinutes = "0" + resultMinutes.toString();
    }
    console.log(resultHours + ":" + resultMinutes);
}
timePlus(['1', '46'])