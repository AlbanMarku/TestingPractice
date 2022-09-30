class Cipher {
    static convert(string) {
        const codeArr = [];
        const splitStr = string.split("");

        splitStr.forEach((element) => {
            const code = element.charCodeAt(0) - 97;
            codeArr.push(code);
        });
        return codeArr;
    }

    static encrypt(string, shift) {
        const codeArray = this.convert(string);
        const encryptArr = [];

        codeArray.forEach((element) => {
            const encryptedVal = (element + shift) % 26;
            encryptArr.push(encryptedVal);
        });
        return encryptArr.join("");
    }

    static decrypt(string, shift) {
        const encryptArr = string.split("");
        const decryptArr = [];

        encryptArr.forEach((element) => {
            const decryptVal = (element - shift) % 26;
            decryptArr.push(decryptVal);
        });
        return decryptArr.join("");
    }
}

export default Cipher;
