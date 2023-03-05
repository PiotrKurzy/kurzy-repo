const array = [0, null, `text`];
const newArray = array.map(function (item) {
  return console.log(typeof item);
});
