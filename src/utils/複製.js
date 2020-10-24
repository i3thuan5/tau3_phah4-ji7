const 計算複製內容 = (綜合標音 = []) => {
  if (!綜合標音 || 綜合標音.length < 1) {
    return 綜合標音;
  }

  return 綜合標音
  .map((item) => {
    const 漢字 = item.漢字.replace(/ /g, "");
    return {
      漢字羅馬: [漢字, item.KIP].join("\n"),
      羅馬字: item.KIP,
      漢字,
    };
  })
  .reduce((acc, item) => ({
    漢字羅馬: [acc.漢字羅馬, item.漢字羅馬].join("\n"),
    漢字: [acc.漢字, item.漢字].join("\n"),
    羅馬字: [acc.羅馬字, item.羅馬字].join("\n"),
  }));
};

export default 計算複製內容;
