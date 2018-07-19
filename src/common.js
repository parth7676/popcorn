export function dateFormatter(dateObject) {
    let dayOfMonth = dateObject.getDate();
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December');
    let curMonth = months[dateObject.getMonth()];
    let curYear = dateObject.getFullYear();
    return `${dayOfMonth} ${curMonth} ${curYear}`;
}