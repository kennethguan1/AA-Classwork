class MaxIntSet
  attr_accessor :store 
  
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    raise 'Out of bounds' if num > @max || num < 0
    @store[num] = true 
  end

  def remove(num)
    @store[num] = false 
  end

  def include?(num)
    if  @store[num] == true 
      return true  
    end 
    false 
  end

# rspec spec/p01_int_set_spec.rb:27

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_accessor :store 
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % @store.length] << num 
  end

  def remove(num)
    @store[num % @store.length].delete(num)
  end

  def include?(num)
    p @store[num % @store.length]
    @store[num % @store.length].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count
  attr_accessor :store 
  # attr_reader :num_buckets
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if count > @store.length 
      resize! 
    end 
    if !@store[num % @store.length].include?(num)
     @store[num % @store.length] << num 
      @count += 1 
    end 
    # return if self.include?(num)
  end

  def remove(num)
    if store[num % @store.length].include?(num)
      @store[num % @store.length].delete(num) 
      @count -= 1
    end
  end

  def include?(num)
    @store[num % @store.length].include?(num)
  end

  private

  # def [](num)
  #   @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  # end

  def num_buckets
    @store.length
  end

  def resize!
    p "We are inside!!!!!!!!!"
    if @count > @store.length 
       new_length = @store.length * 2
      temp_store = @store.flatten 
     p temp_store
       @store = Array.new(new_length) { Array.new }
      p @store 
       temp_store.each do | item | 
        @store[item % new_length] << item 
      end 
    end 
  end
end
