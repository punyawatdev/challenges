import java.util.*;
class Solution{
	
	public static void main(String []argh)
	{
		Scanner scanner = new Scanner(System.in);
		
		while (scanner.hasNext()) {
			String input = scanner.next();
            System.out.println(matchParentheses(input));
		}
		
        scanner.close();
	}


    private static boolean matchParentheses(String str) {
        Stack<Character> st = new Stack<Character>();
        char[] ch = str.toCharArray();
        for (char c : ch) {
            if(c == '{' || c == '[' || c == '(') {
                st.push(c);
            } else {
                if(c == '}' && !st.isEmpty() && st.pop() == '{') {
                    continue;
                } else if(c == ']' && !st.isEmpty() && st.pop() == '[') {
                    continue;
                } else if(c == ')' && !st.isEmpty() && st.pop() == '(') {
                    continue;
                } else {
                    return false;
                }
            }
        }
        return st.isEmpty();
    }
}



