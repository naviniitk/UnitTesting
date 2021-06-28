const capitalString = (str) => {
  if(!str.length) return;

  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = capitalString;