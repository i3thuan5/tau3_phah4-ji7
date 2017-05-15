import { expect } from "chai";
import API from "../../src/api";

const initDomain = "https://服務.意傳.台灣/";

describe("API", () => {
  describe("後端網址", () => {
    it("domain", () => {
      const domain = API.網域();
      expect(domain).to.equal(initDomain);
    });
    it("標漢字音標", () => {
      const domain = API.標漢字音標();
      expect(domain).to.equal(`${initDomain}標漢字音標`);
    });
  });
});
