//HIEP-12/5 using module.exports for working with return value
// using exports.functionX for reusing code
//[tut- module.exports and exports.]https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac
module.exports.convertStringToObjIDArr = (arrStr) => {
    const arrObjId = [];
    arrStr.forEach(str => {
        // console.log(str);
        arrObjId.push(str);
    });
    return arrObjId;
}