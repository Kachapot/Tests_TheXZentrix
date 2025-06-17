const vowelClusterCount = (input)=> {
    let count = 0;
    let inCluster = false;

    for (const char of input) {
        if ('aeiou'.includes(char)) {
            if (!inCluster) {
                count++;
                inCluster = true;
            }
        } else {
            inCluster = false;
        }
    }

    return 'Result is : '+count;
}

return console.log(vowelClusterCount('beautiful'));
