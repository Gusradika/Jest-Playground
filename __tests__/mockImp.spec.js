test("mockImplementation", () => {
  const mockFN = jest
    .fn(() => "default")
    .mockImplementation(() => "First Call")
    .mockImplementation(() => "Second call");

  const res1 = mockFN();
  const res2 = mockFN();

  console.log(res1);
  console.log(res2);
});

test("mockImplementationOnce", () => {
  const mockFN = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "First Call")
    .mockImplementationOnce(() => "Second call");

  const res1 = mockFN();
  const res2 = mockFN();
  const res3 = mockFN();

  //   ini akan return First Call
  console.log(res1);
  console.log(res2);
  console.log(res3);
  //    ini akan return "default", jika 'second call' sudah di init
});
