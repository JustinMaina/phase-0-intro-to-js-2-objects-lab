// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update employee object with a new key-value pair (non-destructively)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee object with a new key-value pair (destructively)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from employee object (non-destructively)
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key-value pair from employee object (destructively)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log(employee); // Initial employee object

// Test updateEmployeeWithKeyAndValue()
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee); // Output: { name: 'John Doe', streetAddress: '123 Main St', age: 30 }

// Test destructivelyUpdateEmployeeWithKeyAndValue()
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'city', 'New York');
console.log(employee); // Output: { name: 'John Doe', streetAddress: '123 Main St', city: 'New York' }

// Test deleteFromEmployeeByKey()
let deletedEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(deletedEmployee); // Output: { name: 'John Doe', city: 'New York' }

// Test destructivelyDeleteFromEmployeeByKey()
destructivelyDeleteFromEmployeeByKey(employee, 'city');
console.log(employee); // Output: { name: 'John Doe' }

