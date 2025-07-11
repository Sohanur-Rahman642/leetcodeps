class Solution {
    private val pairs = mapOf(
        '(' to ')',
        '{' to '}',
        '[' to ']'
    )

    fun isValidInput(s: String): Boolean{
        if(s.isEmpty() || s.length % 2 == 1) return false
        else if(s[0] == ')' || s[0] == '}' || s[0] == ']') return false
        else if(s[s.length - 1] == '(' || s[s.length - 1] == '{' || s[s.length - 1] == '[')  return false
        else return true
    }

    fun isValid(s: String): Boolean {
        if(isValidInput(s).not()) return false

        val stack = ArrayDeque<Char>()

        for (char in s){
            when(char){
                '(', '{', '[' -> stack.addLast(char)
                ')', '}', ']' -> {
                    if(stack.isEmpty()) return false

                    val lastOpenBracket = stack.removeLast()

                    if(pairs[lastOpenBracket] != char) return false
                }
            }
        }

        return stack.isEmpty()
    }
}

///Check whether input is valid 
///Create a parantheses pair map 
///Take a stack, push opening bracket into it 
///If it encounters closing bracket, pop the stack which is last opening bracket, 
///match it with the pair, if not match found, return false
///return whether stack is empty or not