import java.io.*;
import java.util.*;
import java.util.regex.*;;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testCases = Integer.parseInt(scanner.nextLine());
        
        while(testCases > 0) {
            String html = scanner.nextLine();
            boolean found = false;
            
            String regex = "<(.+)>([^<]+)</\\1>";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(html);
            while (matcher.find()) {
                 String content = matcher.group(2).trim();
                 if (!content.isEmpty()) {
                    System.out.println(content);
                    found = true;
                }
            }
            if (!found) {
                 System.out.println("None");
            }
            testCases--;
        }
        scanner.close();
    }
}
