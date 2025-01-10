import java.io.*;
import java.util.*;
import java.math.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BigInteger A = new BigInteger(sc.nextLine());
        BigInteger B = new BigInteger(sc.nextLine());
        
        System.out.println(A.add(B));
        System.out.println(A.multiply(B));
        
        sc.close();
    }
}
