class Employee
    attr_reader :salary
    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @boss.employees << self if @boss != nil
    end

    def bonus(multiplier)
        @salary * multiplier
    end

end

class Manager < Employee
    attr_reader :employees
    def initialize(name, title, salary, boss = nil)
        super
        @employees = []
        
    end

    def bonus(multiplier)
        sum_salary = 0
        @employees.each do |employee| 
            sum_salary += employee.salary * multiplier
            if employee.is_a?(Manager)
                sum_salary += employee.bonus(multiplier)
            end
        end
        sum_salary
    end
end

Ned = Manager.new('Ned', 'founder', 1000000)
Darren = Manager.new('Darren', 'TA Manager', 78000, Ned)
Shawna = Employee.new('Shawna', 'TA', 12000, Darren)
David = Employee.new('David', 'TA', 10000, Darren)


p Darren.bonus(4)
p David.bonus(3)
p Ned.bonus(5)