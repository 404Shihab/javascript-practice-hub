// Student object
const student = {
    name:'Java Khan',       
    age:100,               
    dateOfBirth:'1 January', 
    isPassed: true           
};

console.log(student);

// Subject object with nested object
const subject = {
    name: 'Biology',          
    teacher: 'Ajmal Sir',    
    examDate: '30 Feb',       
    chapters: ['first', 'second', 'third', 'fourth'], // Chapter list
    exam: {
        name: 'Final',        
        marks: 100 
    }
};

console.log(subject);
