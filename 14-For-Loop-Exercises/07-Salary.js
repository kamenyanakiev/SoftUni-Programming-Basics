function salary(input) {
  let numberOfTabs = Number(input[0]);
  let totalSalary = Number(input[1]);
  for (let i = 2; i < input.length; i++) {
    let currentTab = input[i];
    if (currentTab === 'Facebook') {
      totalSalary -= 150;
    } else if (currentTab === 'Instagram') {
      totalSalary -= 100
    } else if (currentTab === 'Reddit') {
      totalSalary -= 50;
    }
    if (totalSalary <= 0) {
      break;
    }
  }
  if (totalSalary > 0) {
    console.log(totalSalary);
  } else {
    console.log(`You have lost your salary.`);
  }
}
salary([10, 750, 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);