import java.io.*;
import java.util.*;
import java.util.regex.*;;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while(scanner.hasNextLine()) {
            String ip = scanner.nextLine();
            
            // Define the pattern that the string should match
            String regex = "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
            
            // Compile the pattern
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(ip);
            
            System.out.println(matcher.matches());
        }
        
        scanner.close();
    }
}