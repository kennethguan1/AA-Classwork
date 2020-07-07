def my_min(list)
    list.min
end
#O(log n) /(n)

 list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

def my_min(list)
    min = list.first

    list.each do |num|
        if num < min 
            min = num 
        end
    end
    min 
end

 list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

#O(n) O(1)

def largest_contiguous_subsum(list)
    array = []

    #n^3
    list.each_with_index do |ele1, idx1|
        list.each_with_index do |ele2, idx2|
            array << list[idx1..idx2]
        end
    end
    
    array2 = array.dup
    #n^2
    array2.each do |sub|    
        array2.delete(sub) if sub.empty?
    end
    
    #n^2
    sum_array = []
    array2.each do|sub2|
        sum_array << sub2.sum
    end

    #n
    sum_array.max
end


def largest_contiguous_subsum(list)
    largest_sum = list.first
    current_sum = list.first

    (1...list.length).each do |i|       #2 + 3 = 5 / 5 + -6 = -1/ 7 -6 = 1/ 1+ 7 = 8
        current_sum = 0 if current_sum < 0
        current_sum += list[i]
        largest_sum = current_sum if current_sum > largest_sum
    end

    largest_sum
end

#O(n) 




list = [5, 3, -7, 10, 11]           #22
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])