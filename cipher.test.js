/* eslint-disable no-undef */
import Cipher from "./cipher";

test("encyrpt", () => {
    expect(Cipher.encrypt("abc", 1)).toBe("123");
});

test("decrypt", () => {
    expect(Cipher.decrypt("234", 1)).toBe("123");
});
