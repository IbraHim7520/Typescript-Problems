**Two Common Typescript Interview Questions**<br></br>
**1.** What are some differences between interfaces and types in TypeScript?
ইন্টারফেস হচ্ছে ওপেন অর্থাৎ এটাকে বার বার রি-ডিক্লেয়ার করা যায়। একই নাম দিয়ে অনেকগুলো ইন্টারফেস ডিক্লেয়ার করা যায় এবং ইচ্ছা মত সেম নামের ইন্টারফেস গুলো কে মার্জ করে সিঙ্গেল একটা ইন্টারফেস নিয়ে এসে ইউজ করা যায় 
অন্যদিকে টাইপ এলিয়াস হচ্ছে ক্লোজ অর্থাৎ এটাকে একবার লিখলে একই নামে এ আবার লিখা যায় না এবং মার্জ ও করা যায়  না।  

**2.** What is the use of the keyof keyword in TypeScript? Provide an example.
keyof দিয়ে কোনো object type-এর সব property নাম বের করা যায় । এগুলোকে পরে variable, function parameter বা generic constraint হিসেবে ব্যবহার করা যায়।
->Example:  <br></br>

type Person = { <br></br>
  name: string;  <br></br>
  age: number;  <br></br>
  country: string;  <br></br>
}; <br></br>
type PKey = keyof Person;  <br></br>
_//Output: <br></br>
//"name" | "age" | "country"_  <br></br>


