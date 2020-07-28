function pa(string_s) {
  
    let max_substring = "";
    let ans = "";
    function palindrome(start_point, end_point) {
        while (start_point >= 0 && end_point < string_s.length) {
            if (string_s[start_point] === string_s[end_point]) {
                start_point--;
                end_point++;
            }
            else break;
        }
        return string_s.slice(start_point + 1, end_point);
    }
    // Type: bab
    for (let i = 1; i < string_s.length-1;i++){
        //string_s[i] is the mid point 
        ans = palindrome(i-1,i+1);
        if (ans.length > max_substring.length) max_substring = ans; 
    }
    // Type: baab 
    for (let i = 0; i < string_s.length - 1; i++) {
        //string_s[i] & string_s[i+1] is the mid point
        if (string_s[i] == string_s[i+1]){
            ans = palindrome(i-1,i+2);
            if (ans.length > max_substring.length) max_substring = ans; 
        }
        
    }
    return max_substring;
}

function search(arr_2d,target) {  
    function bsearch_row(arr_2d, target) {
        if (arr_2d.length === 1) {
            if (target >= arr_2d[0][0]) return 0;
            else return -1;
        }
        let mid = Math.floor((arr_2d.length - 1) / 2);
        if (target >= arr_2d[mid][0] && target < arr_2d[mid + 1][0]) return mid;
        else if (target >= arr_2d[mid + 1][0]) {
            if (bsearch_row(arr_2d.slice(mid + 1)) === -1) return -1;
            else return mid + bsearch_row(arr_2d.slice(mid + 1), target);
        }
        else return bsearch_row(arr_2d.slice(0, mid), target);
    }
    let row = bsearch_row(arr_2d, target); 
    let arr = arr_2d[row]; 
    function bsearch(arr) { 
        if (arr.length === 0) return false;
        else {
            let mid = Math.floor((arr.length - 1) / 2);
            if (arr[mid] === target) return true;
            else if (arr[mid] < target) {
               return bsearch(arr.slice(mid + 1));
            }
            else {
                return bsearch(arr.slice(0, mid));
            }
        }
    }
    let ans = bsearch(arr);
    return ans;
}