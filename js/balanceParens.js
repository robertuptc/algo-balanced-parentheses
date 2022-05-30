balanceParens = (str) => {
    let strSplit = str.split('');
    let stack = [];

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] === ')') {
            if (stack.length !== 0) {
                stack.pop()
            } else {
                strSplit[i] = ''
            }
        } else if (strSplit[i] === '(') {
            stack.push(i)
        }
    } 

    for (let i = 0; i < stack.length; i++) {
        strSplit[stack[i]] = ''
    }
    return strSplit.join('')

}

module.exports = { balanceParens }