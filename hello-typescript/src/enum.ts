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
    Newspaper,      //0
    Newsletter,     //1
    Magazine,       //2
    Book            //3
  }

// Output
// Newspaper = 0
// Newsletter = 1
// Magazine = 2
// Book = 3


// String Enum
// String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.

// The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.

// Consider the same example of a numeric enum, but represented as a string enum:

// Example: String Enum 
enum PrintSocialMedia {
    Facebook = "FACEBOOK",
    Instagram = "INSTAGRAM",
    WhatsApp = "WHATSAPP",
    Twitter = "TWITTER"
}
// Access String Enum 
// PrintMedia.Instagarm;    //returns INSTAGRAM ̰
// PrintMedia['Twitter'];  //returns TWITTER

// In the above example, we have defined a string enum, PrintMedia, with the same values as the numeric enum above, with the difference that these enum values are initialized with string literals. The difference between numeric and string enums is that numeric enum values are auto-incremented, while string enum values need to be individually initialized.



// Heterogeneous Enum
// Heterogeneous enums are enums that contain both string and numeric values.

// Example: Heterogeneous Enum 
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}