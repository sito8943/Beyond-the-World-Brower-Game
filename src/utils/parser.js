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
