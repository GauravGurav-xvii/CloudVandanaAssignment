//C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)
package assigmnetsolutions;

public class Pangram {
	
	public static void main(String[] args) {
		String s = "if it contains all the character of the alphabets ignoring the case of the alphabets";
//		String s = "The quick brown fox jumps over the lazy dog";
		System.out.println(isPangram(s.toLowerCase()));
	}

	public static String isPangram(String s) {
		if(s.length() < 26) {
			return "Its not a Pangram Stringr";
		}else {
			for(char ch= 'a';ch <= 'z'; ch++) {
				if(s.indexOf(ch) < 0) {
					return "Its not a Pangram String";
				}
			}
		}
		return "Its a Pangram String";
	}

}
