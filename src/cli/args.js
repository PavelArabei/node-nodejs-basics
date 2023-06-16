const parseArgs = () => {

    const args = process.argv
        .slice(2)
        .map((el, i, arr) => {
            if (i % 2 === 0) {
                const name = el.substring(2);
                const value = arr[i + 1]
                return `${name} is ${value}`
            }

        })
        .filter((Boolean))
        .join(', ')

    console.log(args)
};

parseArgs();