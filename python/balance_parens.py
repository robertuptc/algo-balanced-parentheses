def balance_parens(str):
    split_str = list(str)
    stack = []

    for idx, char in enumerate(split_str) :
        if char == ")" :
            if stack:
                stack.pop()
            else:
                split_str[idx] = ''
        elif char == "(" :
            stack.append(idx)
    
    for i in stack :
        split_str[i] = ''

    return ''.join(split_str)