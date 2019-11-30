#include <iostream>

using namespace std;

/// HackerRank
/// 2D Array - DS
/// Solved by Sohan Asif

int hourglassSum(vector<vector<int>> arr) {

    vector<int> res;
    for(int i=0;i<=3;i++)
    {
        for(int j=0;j<=3;j++)
        {
            int sum=0;
            sum+=arr[i][j];
            sum+=arr[i][j+1];
            sum+=arr[i][j+2];
            sum+=arr[i+1][j+1];
            sum+=arr[i+2][j];
            sum+=arr[i+2][j+1];
            sum+=arr[i+2][j+2];

            res.push_back(sum);
        }
    }
    int max = *max_element(res.begin(), res.end());
    return max;

}



