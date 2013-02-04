describe("QA verfication of the Roman Numberal Converter", function() {
 
  function wait(ms) {
    var start = +(new Date());
    while (new Date() - start < ms);
  }  
  
  describe("Deploying to QA", function() {
    it("This shouldn't take too long", function() {
    });
    
    it(".", function() {
    });
    
    it(".", function() {
    });
    
    it(".", function() {
    });
    
    it("All set!", function() {
    });
    
    afterEach(function() {
      wait(3000);
    });
  });
    
  describe("QA Team is coordinating and updating their test plans", function() {
    it("This shouldn't take too long", function() {
    });
      
    it(".", function() {
    });
    
    it(".", function() {
    });
      
    it(".", function() {
    });

    it("That wasn't so bad!", function() {
    });
 
    afterEach(function() {
      wait(3000);
    });

  });
    
  describe("QA Team is starting their tests...", function() {
    it("This shouldn't take too long", function() {
    });

    it("That wasn't so bad!", function() {
    });

    afterEach(function() {
     wait(3000);
    });
  });

  describe("when converting an integer to a string", function() {

    beforeEach(function() {
      wait(3000);
    });

    it("should convert 1 to i", function() {
      expect(romanNumeral(i)).toEqual('1');
    });

    it("should convert 2 to ii", function() {
      expect(romanNumeral(ii)).toEqual('2');
    });

    it("should convert 3 to iii", function() {
      expect(romanNumeral(iii)).toEqual('3');
    });


    it("should convert 4 to iv", function() {
      expect(romanNumeral(iv)).toEqual('4');
    });


    it("should convert 5 to v", function() {
      expect(romanNumeral(v)).toEqual('5');
    });


    it("should convert 6 to vi", function() {
      expect(romanNumeral(vi)).toEqual('6');
    });


    it("should convert 9 to ix", function() {
      expect(romanNumeral(ix)).toEqual('9');
    });


    it("should convert 10 to x", function() {
      expect(romanNumeral(x)).toEqual('10');
    });


    it("should convert 11 to xi", function() {
      expect(romanNumeral(xi)).toEqual('11');
    });


    it("should convert 14 to xiv", function() {
      expect(romanNumeral(xiv)).toEqual('14');
    });


    it("should convert 15 to xv", function() {
      expect(romanNumeral(xv)).toEqual('15');
    });


    it("should convert 19 to xix", function() {
      expect(romanNumeral(xix)).toEqual('19');
    });


    it("should convert 20 to xx", function() {
      expect(romanNumeral(xx)).toEqual('20');
    });


    it("should convert 40 to xl", function() {
      expect(romanNumeral(xl)).toEqual('40');
    });


    it("should convert 49 to xlix", function() {
      expect(romanNumeral(xlix)).toEqual('49');
    });


    it("should convert 50 to l", function() {
      expect(romanNumeral(l)).toEqual('50');
    });


    it("should convert 51 to li", function() {
      expect(romanNumeral(li)).toEqual('51');
    });


    it("should convert 90 to xc", function() {
      expect(romanNumeral(xc)).toEqual('90');
    });


    it("should convert 99 to xcix", function() {
      expect(romanNumeral(xcix)).toEqual('99');
    });


    it("should convert 100 to c", function() {
      expect(romanNumeral(c)).toEqual('100');
    });


    it("should convert 101 to ci", function() {
      expect(romanNumeral(ci)).toEqual('101');
    });


    it("should convert 400 to cd", function() {
      expect(romanNumeral(cd)).toEqual('400');
    });


    it("should convert 499 to cdxcix", function() {
      expect(romanNumeral(cdxcix)).toEqual('499');
    });


    it("should convert 500 to d", function() {
      expect(romanNumeral(d)).toEqual('500');
    });


    it("should convert 501 to di", function() {
      expect(romanNumeral(di)).toEqual('501');
    });


    it("should convert 900 to cm", function() {
      expect(romanNumeral(cm)).toEqual('900');
    });


    it("should convert 999 to cmxcix", function() {
      expect(romanNumeral(cmxcix)).toEqual('999');
    });


    it("should convert 1000 to m", function() {
      expect(romanNumeral(m)).toEqual('1000');
    });


    it("should convert 1001 to mi", function() {
      expect(romanNumeral(mi)).toEqual('1001');
    });


    it("should convert 4999 to mmmmcmxcix", function() {
      expect(romanNumeral(mmmmcmxcix)).toEqual('4999');
    });

  });

});