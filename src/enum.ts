//Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.

// In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

// There are three types of enums:

// 1.Numeric enum
// 2.String enum
// 3.Heterogeneous enum

// Numeric Enum
// Numeric enums are number-based enums i.e. they store string values as numbers.
// Enums can be defined using the keyword enum. Let's say we want to store a set of print media types. 
// The corresponding enum in TypeScript would be:

enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }

  