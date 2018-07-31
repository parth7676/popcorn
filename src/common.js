export function dateFormatter(dateObject) {
  let dayOfMonth = dateObject.getDate();
  let months = new Array('January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December');
  let curMonth = months[dateObject.getMonth()];
  let curYear = dateObject.getFullYear();
  return `${dayOfMonth} ${curMonth} ${curYear}`;
}

export function timeFormatter(minutes) {
  let realmin = minutes % 60;
  let hours = Math.floor(minutes / 60);
  if (minutes > 60)
    return `${hours} hrs ${realmin} mins`;
  return `${realmin} mins`;
}

export function moneyFormatter(num, decimals) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(decimals).replace(rx, "$1") + si[i].symbol;
}
