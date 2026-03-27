let hobbies = ["Sleeping", "Eating"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Vhaugnn", "Vhaugnn6767", 123456]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Vhaugnn",
    age: 24,
    hobbies: ["Sleeping", "Eating"],
    role: {
        description: 'admin',
        id: 1
    }
}
console.log(user)
// Must not null or undefined
let val: {} = "Vhaugnn Patino"
// val = null  
// val = undefined

console.log(val)

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Vhaugnn Patino'
    // isPartTimeInstructor: true
}
console.log(data)