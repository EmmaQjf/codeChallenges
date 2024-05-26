function separateNumbers(s) {
    for (let length = 1; length <= s.length / 2; length++) {
        let numStr = s.slice(0, length);
        let num = BigInt(numStr);
        let curr = num.toString();

        let j = length;
        while (curr.length < s.length) {
            let next = (num + BigInt(1)).toString();
            if (s.slice(j, j + next.length) !== next) break;
            curr += next;
            num += BigInt(1);
            j += next.length;
        }

        if (curr === s) {
            console.log("YES", numStr);
            return;
        }
    }
    console.log("NO");
}
    