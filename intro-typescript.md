# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is an extension of JavaScript that introduces static typing and is compiled into regular JavaScript.


## Why use Typescript
- Provides type safety
- Improves developer tools and overall experience
- Makes large-scale projects easier to handle
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Shows type inference, explicit typing, and the result of assigning incompatible types.

Even if you don’t manually define a type for a variable or function, TypeScript can often determine it automatically—this is known as type inference. However, explicitly declaring types makes your code easier to read and understand. Once a variable like `userAge` is defined as a number, assigning a string later will cause an error. Functions follow the same rule: passing a value of the wrong type will trigger an error. If your setup prevents JavaScript from being generated when errors exist, no output file will be created. But if you run the file directly using Node, it may still execute, which can lead to unexpected results such as combining strings and numbers.

## 02-vanilla-js-types.js
Demonstrates how JavaScript’s `typeof` operator is used to check variable types during runtime.

The `typeof` operator provides a quick way to identify the type of a value while the program is running. While helpful, it only detects issues during execution. TypeScript is more reliable for type checking because it identifies problems before the code runs, improving readability and reducing errors.

## 03-flexible-types.ts
Explains the `any` type, highlighting both its flexibility and its drawbacks.

The `any` type allows a variable to store any type of value—whether it’s a number, string, or object—without producing errors. Although this offers flexibility, it removes the advantages of type checking. This can make bugs harder to find and reduces code reliability. It should be used only when necessary since it essentially disables TypeScript’s type safety.

## 04-arrays-objects.ts
Covers arrays with union types, nested object structures, and the use of `Record` for flexible objects.

Arrays can contain strings, numbers, or both using union types. You can define them as `datatype[]` or `Array<datatype>`, and TypeScript ensures that only valid types are added. Objects can also have strictly defined properties, including nested ones. The `Record` utility type allows you to define flexible key-value pairs, where keys are treated as strings even if written as numbers. This helps maintain structure while allowing flexibility.

## 05-enum.ts
Introduces enums, especially string enums, and how values are assigned properly.

Enums allow you to define a set of fixed, named values, such as user roles. Numeric enums can be accessed by both name and index, but using custom starting values can result in invalid indices. String enums are more reliable since each value is clearly defined and accessed only by name.

## 06-alternative-to-enum.ts
Shows how literal types can be used as a simpler alternative to enums.

Literal types restrict a variable to specific values, such as `'admin' | 'teacher' | 'student'`. They work like a simplified version of enums without extra syntax. This maintains type safety while keeping the code easier to read and understand.

## 07-custom-type-role.ts
Demonstrates type aliases and how they are used for more complex object typing.

Type aliases allow you to define a custom type and reuse it throughout your code. For example, `type Role = 'admin' | 'teacher' | 'student'` can be used within objects. You can define user objects with properties like `name`, `age`, `role`, and `permissions`, ensuring consistency and reducing errors.

## 08-functions.ts
Covers function return types, including `void`, `never`, callbacks, and object methods.

Functions can have clearly defined return types. `void` is used when a function does not return anything meaningful, while `never` is used for functions that do not complete normally, such as those that throw errors or run indefinitely. Callbacks can also be typed to ensure correct arguments and return values. Object methods can be typed as well to maintain predictable behavior.

## 09-special-types.ts
Explains `null` and `undefined`, including how they are used with union types.

`null` and `undefined` represent the absence of a value. They can be combined with other types, such as `string | null`, which forces you to handle missing values properly. This helps prevent runtime errors and makes your code more explicit.

## 10-form.html and 10-type-narrowing.ts
Demonstrates DOM type narrowing, optional chaining, non-null assertions, and type casting.

When using `getElementById`, TypeScript treats the returned element as a generic `HTMLElement`, which may not include properties like `value`. To safely access these properties, you can use `instanceof`, type casting (`as HTMLInputElement`), optional chaining (`?.`), or the non-null assertion (`!`). These approaches help avoid runtime errors and ensure safer DOM interactions.