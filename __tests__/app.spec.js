const { getData } = require("../app");

test("Fetch Data", async () => {
  const res = await getData();
  console.log(res);
});
