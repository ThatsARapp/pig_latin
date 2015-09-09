describe('pigLatin', function() {
    it("adds an 'ay' to the end of words that start with a vowel", function(){
    expect(pigLatin("apple")).to.equal("appleay");
    });


    it("handles mixed case entries", function(){
        expect(pigLatin("ApPlE")).to.equal("appleay");
    });

    it("when words start with one or more consonants it moves those consonants to the end of the word", function(){
        expect(pigLatin("truck")).to.equal("ucktray");
    });
});
