export const getQueryParam = (param) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == param) {
      return decodeURIComponent(pair[1]);
    }
  }
  return false;
};
