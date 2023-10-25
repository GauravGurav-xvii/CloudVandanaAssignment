//A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
package assigmnetsolutions;

import java.util.Arrays;

public class ShuffleArray {
	
	public static int[] shuffle(int[] num, int n) {
		int[] resultArray = new int[num.length];
		for(int i=0;i<n;i++) {
			resultArray[i * 2] = num[i];
			resultArray[(i * 2) + 1] = num[i + n];
			
		}
		return resultArray;
	}
	
	public static void main(String[] args) {
		System.out.println(Arrays.toString(shuffle(new int[] {1,2,3,4,5,6,7}, 3)));
	}

}
