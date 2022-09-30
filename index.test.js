/* eslint-disable no-undef */
import * as func from "./index";

test("example test", () => {
    expect(func.foo(3)).toBe(4);
});

test("Capitalise first letter", () => {
    expect(func.captialise("foo")).toBe("Foo");
});

test("Reverse word", () => {
    expect(func.reverseString("foo")).toBe("oof");
});
