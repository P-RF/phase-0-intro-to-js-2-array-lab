require ( './helpers.js' );

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph); 
  // pushes the "Ralph" argument to the end of 'cats' array
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
  // unshifts the "Bob" argument to the beginning of 'cats' array
}

function destructivelyRemoveLastCat(Garfield) {
  cats.pop();
  // removes last element "Garfield"
}

function destructivelyRemoveFirstCat(Milo) {
  cats.shift();
  // removes first element "Milo"
}

function appendCat(Broom) {
  // function to append element to 'cats' array and return a new array
  return [...cats, Broom];
  // create a new array with 'cats' and append 'Broom'
}

  cats;
  // ["Milo", "Otis", "Garfield"]

  appendCat;
  // ["Milo", "Otis", "Garfield", "Broom"]

  function prependCat(Arnold) {
    // function to prepend element to 'cats'and prepend 'Arnold'
    return [Arnold, ...cats];
    // create a new array with 'cats' and prepend 'Arnold'
  }

  cats;
  // ["Milo", "Otis", "Garfield"]

  prependCat;
  // ["Arnold", "Milo", "Otis", "Garfield"]

function removeLastCat() {
  // function to remove the last cat from 'cats' array and return a new array
  return cats.slice(0, -1);
    // use slice() to create a shallow copy of 'cats' array excluding last element
}

function removeFirstCat() {
    // function to remove the first cat from 'cats' array and return a new array
  return cats.slice(1);
    // use slice() to create a shallow copy of 'cats' array excluding first element
}