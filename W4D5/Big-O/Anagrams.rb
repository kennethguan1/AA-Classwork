def first_anagram?(str1, str2)
    letters = str1.split('')
    anagrams = letters.permutation.to_a
    arr = []
    anagrams.each do |sub|
        arr << sub.join('')
    end
    arr.include?(str2)
end


# str1 = 'hello'
# str2 = 'bye'
# p first_anagram?(str1, str2)

def second_anagram?(str1, str2)
    letters2 = str2.split('')

    str1.each_char do |char|
        if str2.include?(char)
            index = letters2.find_index(char)
            letters2.delete_at(index)
        end
    end

    letters2.empty?
end

# str1 = 'hello'
# str2 = 'olleh'
# p second_anagram?(str1, str2)

def third_anagram?(str1, str2)

end

str1 = 'hello'
str2 = 'olleh'
p third_anagram?(str1, str2)