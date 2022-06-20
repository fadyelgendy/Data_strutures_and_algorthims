class Fibonacci {
    constructor(val) {
        this.val = val;
    }

    run() {
        console.log("recursive");

        function fib(num) {
            if (num <= 2) return 1;
            else return fib(num - 1) + fib(num - 2);
        }

        return fib(this.val);
    }

    /**
     * Dynamic programming using memoizations
     */
    dynamic_run() {
        console.log("dynamic");
        function fib(num, memo = []) {
            if (memo[num] !== undefined) return memo[num];
            if (num <= 2) return 1;

            let res = fib(num - 1, memo) + fib(num - 2, memo);
            memo[num] = res;

            return res;
        }

        return fib(this.val);
    }

    fib_table() {
        let num = this.val;
        
        if (num <= 2) return 1;
        let fibNums = [0, 1, 1];
        for (let i = 3; i <= num; i++) {
            fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
        }

        return fibNums[num];
    }
}

export default Fibonacci;