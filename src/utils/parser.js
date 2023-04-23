/**
 *
 * @param {string} url
 */
export const parseImageKit = (url, quality = "80", width = "", height = "") => {
  const slashSplitter = url.split("/");
  let result = `${slashSplitter[0]}//${slashSplitter[2]}/${
    slashSplitter[3]
  }/tr:q-${quality}${width.length ? `,w-${width}` : ""}`;
  for (let i = 4; i < slashSplitter.length; i += 1)
    result += `/${slashSplitter[i]}`;
  return result;
};

/**
 *
 * @param {string} queries
 */
export const parseQueries = (queries) => {
  const toReturn = {};
  const queryParams = queries.substring(1).split("&");
  queryParams.forEach((item) => {
    const [param, value] = item.split("=");
    toReturn[param] = value;
  });
  return toReturn;
};
