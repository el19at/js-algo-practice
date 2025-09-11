const path = require("path");
const filePath = `./${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a | expected
    ${"{[()]}"} | ${true}
    ${"{[(])}"} | ${false}
    ${"()[]{}"} | ${true}
    ${"([)]"} | ${false}
    ${""} | ${true}
    ${"(((((((((())))))))))"} | ${true}
    ${"{(})"} | ${false}
    ${"{[]({})}"} | ${true}
    ${"{[}"} | ${false}
    ${"[(])"} | ${false}
  `(
    "returns $expected when calling with the following param/s: a",
    ({ a, expected }) => {
      expect(file.solution(a)).toStrictEqual(expected);
    }
  );
});
