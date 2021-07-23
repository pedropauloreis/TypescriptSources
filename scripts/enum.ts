enum Permission {
    ADMIN = 1,
    USER,
    READONLY
} 

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

enum Permission2{
    ADMIN = 1,
    DONO,
    USER = "USERPERMISSION",
    READONLY = "LEITURA"
} 

console.log(Permission2[1]);
console.log(Permission2[2]);

//INVERSO
console.log(Permission2["USER"]);
console.log(Permission2["READONLY"]);
