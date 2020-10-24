import config from "tensuConfig";

const configGenerator = {
  專案: () => config.專案,
  全部腔口: () => config.腔口,
  預設腔口: () => config.腔口[0],
  範例查詢: () => config.範例查詢,
  頁尾連結: () => config.頁尾連結,
};

export default configGenerator;
