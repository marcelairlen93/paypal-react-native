export const generateRandomDOB = () => {
  return getRandomDate(new Date('2021-01-01'), new Date());
}

export function getRandomDate(from, to) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

export const spliceString = (index, stringToAdd, string) => {
  if (index > 0) {
    return string.substring(0, index) + stringToAdd + string.substr(index);
  }

  return stringToAdd + string;
};

function numberWithSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatCurrency = (value) => {
  let newValue = value.toFixed(2).replace('.', ',');
  newValue = numberWithSeparator(newValue);
  if (value < 0) {
    newValue = spliceString(1, 'R$ ', newValue);
  } else {
    newValue = spliceString(0, 'R$ ', newValue);
  }
  return newValue;
}