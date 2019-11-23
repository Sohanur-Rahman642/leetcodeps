#include <iostream>

#include <stack>

using namespace std;


/// Problem: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/*An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.*/







int main()
{
      string s;
      getline(cin,s);
      int n=s.length();

       if(s.length()==0)
       {
           return true;
       }

       if(s.length()==1)
       {
           return false;
       }

        stack<char> s1;




        for(int i=0;i<n;i++)
        {


            char c=s[i];
            cout<<c<<endl;

            if(c==']'|| c=='}' || c==')')
            {
            if(s1.size() == 0 ) return false;
            if(c == '}' && s1.top() != '{') return false;
            if(c == ')' && s1.top() != '(') return false;
            if(c == ']' && s1.top() != '[') return false;
            s1.pop();
            }

        else
        {
            s1.push(c);
        }

        }


        if(s1.empty())
            cout<<"Valid";
        else
            cout<<"Not Valid";




    return 0;
}
