import java.lang.Math;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        List<Integer> A = new ArrayList<>();

        Scanner in = new Scanner(System.in);
        System.out.println("Please enter a list of numbers(through the GAP): ");

        String [] tokens = in.nextLine().split("\\s");

        for(int i = 0; i < tokens.length; i++){
            A.add(Integer.parseInt(tokens[i]));
        }

        List<Integer> frequencies = new ArrayList<>();
        List<Integer> numbers = new ArrayList<>();
        System.out.print("frequency: ");
        findAndPrintFreq(A,frequencies,numbers);
        System.out.println();
        System.out.print("number   : ");
        printNumbersWComma(A);
        System.out.println();
        System.out.println();
        printGraph(frequencies, numbers);
        printNumbersWSpace(numbers);
    }

    public static void findAndPrintFreq(List<Integer> A , List<Integer> frequencies, List<Integer> numbers) {
        for (int i = getMin(A); i < getMax(A) + 1; i++) {
            int counter = 0;

            for (int j = 0; j < A.size(); j++) {
                if (i == A.get(j)) {
                    counter++;
                }
                if (j == A.size() - 1) {
                    System.out.print(counter);
                    frequencies.add(counter);
                    if (i != getMax(A)) {
                        System.out.print(", ");
                    }
                }
            }
            numbers.add(i);
        }
    }

    public static void printNumbersWComma(List<Integer> A) {
        for (int i = getMin(A); i < getMax(A) + 1; i++) {
            System.out.print(i);
            if (i != getMax(A))
                System.out.print(", ");
        }
    }

    public static void printGraph(List<Integer> frequencies,List<Integer> numbers) {
        for (int i = getMax(frequencies); i > 0 ; i--) {
            String line = "";
            for (int j = 0; j < getMax(numbers); j++) {
                if (i <= frequencies.get(j))
                    line += "* ";
                else
                    line += "  ";
            }
            System.out.println(line);
        }
    }

    public static void printNumbersWSpace(List<Integer> numbers) {
        for (int i = getMin(numbers); i < getMax(numbers)+1; i++) {
            System.out.print(i + " ");
        }
    }

    public static int getMax(List<Integer> A) {
        int maxA = 0;
        for (int i = 0; i < A.size(); i++) {
            if (A.get(i) > maxA) {
                maxA = A.get(i);
            }
        }
        return maxA;
    }

    public static int getMin(List<Integer> A) {
        int minA = Integer.MAX_VALUE;
        for (int i = 0; i < A.size(); i++) {
            if (A.get(i) < minA) {
                minA = A.get(i);
            }
        }
        return minA;
    }

}
