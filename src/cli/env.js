const parseEnv = () => {
    const prefix = 'RSS_';
    const stringOfPrefixElements = Object.entries(process.env)
        .reduce((acc, [key, value]) => {
            if (key.startsWith(prefix)) acc.push(`${key}=${value}`)
            return acc
        }, [])
        .join('; ')

    console.log(stringOfPrefixElements)
};

parseEnv();
