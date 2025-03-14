const crypto = require("crypto");
const { getData } = require("../app");

// Fake implementation
// jest.mock("crypto");

test("Fetch Data", async () => {
  // ResolvedValue
  //   crypto.randomBytes.mockResolvedValueOnce("bytes");
  //   crypto.randomBytes.mockImplementationOnce(() => Promise.resolve("bytes"));

  //   Tanpa inisasi dapat menggunakan jest.spyOn()
  jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("bytes");

  const res = await getData();
  console.log(res);
  expect(res).toBe("bytes");
});
