const expect=require("expect");
const request=require("supertest");
const app=require("./app.js").app;

describe("simple",()=>{
it("should return my localhost",(done)=>{
    request(app)
    .get("/")
    .expect(200)
    .expect("my localhost")
    .end(done);
})
})


describe("longcut",()=>{
    it("should include yo man",(done)=>{
        request(app)
        .get("/hello")
        .expect(400)
        // .expect((response)=>{
        //     console.log(response.body);
        //     expect(response.body).toInclude({
        //         name:"yo man"
        //     });
        // })
        .end(done);
    })
})
// describe('normal',()=>{
//     it("should add two numbers",(done)=>{
//         var result=app.add(11,33,(result)=>{
//             if(result!=44)
//             {
//                 throw new Error(`Expected 44 but got ${result}`);
//             }
//             done();
//         });
        
//     })
// })
// describe('expect',()=>{
// it("should add two numbers",(done)=>{
//     var result=app.add(11,33,(result)=>{
//         expect(result).toBe(44);
//         done();
//     });
    
// })
// })