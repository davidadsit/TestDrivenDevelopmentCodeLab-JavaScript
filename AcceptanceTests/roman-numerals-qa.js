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
      expect(romanNumeral(1)).toEqual('i');
    });

    it("should convert 2 to ii", function() {
      expect(romanNumeral(2)).toEqual('ii');
    });

    it("should convert 3 to iii", function() {
      expect(romanNumeral(3)).toEqual('iii');
    });


    it("should convert 4 to iv", function() {
      expect(romanNumeral(4)).toEqual('iv');
    });


    it("should convert 5 to v", function() {
      expect(romanNumeral(5)).toEqual('v');
    });


    it("should convert 6 to vi", function() {
      expect(romanNumeral(6)).toEqual('vi');
    });


    it("should convert 9 to ix", function() {
      expect(romanNumeral(9)).toEqual('ix');
    });


    it("should convert 10 to x", function() {
      expect(romanNumeral(10)).toEqual('x');
    });


    it("should convert 11 to xi", function() {
      expect(romanNumeral(11)).toEqual('xi');
    });


    it("should convert 14 to xiv", function() {
      expect(romanNumeral(14)).toEqual('xiv');
    });


    it("should convert 15 to xv", function() {
      expect(romanNumeral(15)).toEqual('xv');
    });


    it("should convert 19 to xix", function() {
      expect(romanNumeral(19)).toEqual('xix');
    });


    it("should convert 20 to xx", function() {
      expect(romanNumeral(20)).toEqual('xx');
    });


    it("should convert 40 to xl", function() {
      expect(romanNumeral(40)).toEqual('xl');
    });


    it("should convert 49 to xlix", function() {
      expect(romanNumeral(49)).toEqual('xlix');
    });


    it("should convert 50 to l", function() {
      expect(romanNumeral(50)).toEqual('l');
    });


    it("should convert 51 to li", function() {
      expect(romanNumeral(51)).toEqual('li');
    });


    it("should convert 90 to xc", function() {
      expect(romanNumeral(90)).toEqual('xc');
    });


    it("should convert 99 to xcix", function() {
      expect(romanNumeral(99)).toEqual('xcix');
    });


    it("should convert 100 to c", function() {
      expect(romanNumeral(100)).toEqual('c');
    });


    it("should convert 101 to ci", function() {
      expect(romanNumeral(101)).toEqual('ci');
    });


    it("should convert 400 to cd", function() {
      expect(romanNumeral(400)).toEqual('cd');
    });


    it("should convert 499 to cdxcix", function() {
      expect(romanNumeral(499)).toEqual('cdxcix');
    });


    it("should convert 500 to d", function() {
      expect(romanNumeral(500)).toEqual('d');
    });


    it("should convert 501 to di", function() {
      expect(romanNumeral(501)).toEqual('di');
    });


    it("should convert 900 to cm", function() {
      expect(romanNumeral(900)).toEqual('cm');
    });


    it("should convert 999 to cmxcix", function() {
      expect(romanNumeral(999)).toEqual('cmxcix');
    });


    it("should convert 1000 to m", function() {
      expect(romanNumeral(1000)).toEqual('m');
    });


    it("should convert 1001 to mi", function() {
      expect(romanNumeral(1001)).toEqual('mi');
    });


    it("should convert 4999 to mmmmcmxcix", function() {
      expect(romanNumeral(4999)).toEqual('mmmmcmxcix');
    });

  });

});
