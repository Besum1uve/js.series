const JsUser={
    name: "anindita"
}
JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())