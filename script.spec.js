// first
describe("replace", function(){
    it("this should replace a letter with another in a string", function(){
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz")
    })
    it("this would replace the first character", function(){
        expect(replaceWith("Foo", "F", "B")).toEqual("Boo")
    })
});
// second
describe("Expand", function(){
    it("expands array", function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
    })
    it("returns a copy of array", function(){
        expect(["Foo", "test"],1).toEqual(["Foo", "test"])
    })
});

// third

describe("AcceptNumberOnly", function(){
    it("Does not accept strings", function(){
        expect(acceptNumbersOnly([1,"Foo"])).toEqual(false)
    })
    it("Accept only numbers", function(){
        expect(acceptNumbersOnly([1,2,3,4,5,6])).toEqual(true)
    })
    it("Does not accept NaN", function(){
        expect(acceptNumbersOnly([1,2,3,4,5,6,NaN])).toEqual(false)
    })   
});

// forth

describe("mergeArrays", function() {
    it("Merge arrays", function(){
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
    })
})

// fifth

describe("MergeObject", () =>{
    it("merges Objects", () =>{
        expect(mergeObjects(obj1,obj2)).toEqual({name: "thing", num: 55, test: "thing"})
    })
})