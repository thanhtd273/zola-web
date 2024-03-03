export const showLoading = function () {
  document.getElementById("loading").style = {
    display: "flex",
    height: "100vh",
  };
};
export const hideLoading = function () {
  document.getElementById("loading").style.display = "none";
};

export function getCacheData(key = "user") {
  let cache =
    localStorage.getItem(key) !== "undefined"
      ? localStorage.getItem(key)
      : sessionStorage.getItem(key);
  cache =
    cache === "undefined" || cache === undefined || cache === "" ? null : cache;
  return JSON.parse(cache);
}

export const setCacheData = (data, key = "user") => {
  if (data === null) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
  sessionStorage.setItem(key, JSON.stringify(data));
  return getCacheData(key);
};
