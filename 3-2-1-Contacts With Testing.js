let contactStorage = []; // here is where you'll store your contacts
let longestName = "";
let longestEmail = "";
let errorContacts = [];

/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact("Betty", "Holberton", "betty.holberton@eniac.edu")
 *
 *  Returns:
 *    undefined
 */
const addContact = function(firstName, lastName, email) {
  try{
    if(typeof firstName !== 'string') throw "not a string";
    if(typeof lastName !== 'string') throw "not a string";
    if(typeof email !== 'string') throw "not a string";
  }
  catch(err){
    return false;
  }
  return contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
}

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        "first_name": "Tanny",
 *        "last_name": "Vibert",
 *        "email": "tvibert0@illinois.edu",
 *      },
 *      {
 *        "first_name": "Tova",
 *        "last_name": "Myall",
 *        "email": "tmyall1@instagram.com",
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function(contacts) {
  for(var i = 0; i < contacts.length; i++){
    var con = contacts[i];
    if(con.first_name.length + con.last_name.length > longestName.length){
      longestName = con.first_name + " " + con.last_name;
    }
    if(con.email.length > longestEmail.length){
      longestEmail = con.email;
    }
    if(addContact(con.first_name, con.last_name, con.email) === false){
      errorContacts.push(con);
    } else {
      contactStorage.push(con);
    }
  }
}


/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const printContacts = function() {
  sortContacts(contactStorage);
  var width1 = longestName.length + 4;
  var width2 = longestEmail.length + 4;
  var widthTot = width1 + width2;
  var height = contactStorage.length + 4;
  var contactsTable = new Array(height);
  var count = 0;
  for(let i = 0; i < height; i++){
    contactsTable[i] = new Array(widthTot);
    for(let j = 0; j < widthTot; j++){
      if(j === 0 || j === width1-1 || j === widthTot-1){
        contactsTable[i][j] = "|";
      } else if (i === 1) {
        contactsTable[i][j] = "";
        if(j === 1){
          contactsTable[i][j] = " Full Name ";
        } else if (j === width1) {
          contactsTable[i][j] = " Email Address ";
        } else if (contactsTable[i][1].length < j && j < width1) {
          contactsTable[i][j] = " ";
        } else if (contactsTable[i][1].length < j && j > width1+contactsTable[i][width1].length-1 && j < widthTot) {
          contactsTable[i][j] = " ";
        }
      } else if (i > 2 && i != height-1) {
        contactsTable[i][j] = "";
        if(j === 1){
          contactsTable[i][j] = " " + contactStorage[count].first_name + " " + contactStorage[count].last_name + " ";
        } else if (j === width1) {
          contactsTable[i][j] = " " + contactStorage[count].email + " ";
          count++;
        } else if (contactsTable[i][1].length < j && j < width1) {
          contactsTable[i][j] = " ";
        } else if (contactsTable[i][1].length < j && j > width1+contactsTable[i][width1].length-1 && j < widthTot) {
          contactsTable[i][j] = " ";
        }
      } else {
        contactsTable[i][j] = "-";
      }
    }
  }
  for(let i = 0; i < height; i++){
    for(let j = 0; j < widthTot; j++){
      process.stdout.write(contactsTable[i][j]);
    }
    console.log();
  }
  if(errorContacts.length > 0){
    console.log("Could not import " + errorContacts.length + " contacts.");
    for(let i = 0; i < errorContacts.length; i++){
      console.log("First: " + errorContacts[i].first_name + " , Last: " + errorContacts[i].last_name + ", Email: " + errorContacts[i].email);
    }
  }
}

const sortContacts = function(array){
  array = array.sort(function(a,b){
    var x = a.first_name.toLowerCase();
    var y = b.first_name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
}

console.assert(addContact("word","blah") === false);
console.assert(addContact("word") === false);
console.assert(addContact("word", "blah", undefined) === false);
console.assert(addContact("word", "blah") === false);
console.assert(addContact("word", 20, "blah") === false);
console.assert(addContact("word", "blah", NaN) === false);
console.assert(addContact(true, "word", "blah") === false);
console.assert(addContact() === false);

////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": "Tanny",
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": "Engracia",
    "last_name": "Folger",
    "email": "efolger2@epa.gov",
  },
  {
    "first_name": "Conroy",
    "last_name": "Honsch",
    "email": "chonsch3@sohu.com",
  },
  {
    "first_name": "Mateo",
    "last_name": "Da Costa",
    "email": "mdacosta5@about.com",
  },
  {
    "first_name": "Ambrose",
    "last_name": "Scullard",
    "email": "ascullard6@timesonline.co.uk",
  },
  {
    "first_name": "Shaylah",
    "last_name": "Fairney",
    "email": "sfairney7@stumbleupon.com",
  },
  {
    "first_name": "Pier",
    "last_name": "Waine",
    "email": "pwaine8@unc.edu",
  },
  {
    "first_name": "Karita",
    "last_name": "Bough",
    "email": "kbough9@angelfire.com",
  },
  {
    "first_name": "Marguerite",
    "last_name": "Lafayette",
    "email": "mlafayettea@bravesites.com",
  },
  {
    "first_name": "Northrop",
    "last_name": "Bauchop",
    "email": "nbauchopb@pagesperso-orange.fr",
  },
  {
    "first_name": "Devon",
    "last_name": "Bocking",
    "email": "dbockingc@comcast.net",
  },
  {
    "first_name": "Charil",
    "last_name": "Clegg",
    "email": "cclegge@weibo.com",
  },
  {
    "first_name": "Nessi",
    "last_name": "Bywaters",
    "email": "nbywatersf@shop-pro.jp",
  },
  {
    "first_name": "Mercy",
    "last_name": "Browncey",
    "email": "mbrownceyg@yelp.com",
  },
  {
    "first_name": "Didi",
    "last_name": "Grose",
    "email": "dgroseh@google.com.hk",
  },
  {
    "first_name": "Niccolo",
    "last_name": "Spruce",
    "email": "nsprucei@wordpress.com",
  },
  {
    "first_name": "Winston",
    "last_name": "Hixley",
    "email": "whixleyj@homestead.com",
  },
  {
    "first_name": "Willdon",
    "last_name": 22,
    "email": "whedleyd@purevolume.com",
  },
  {
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": true,
  },
  {
    "first_name": 55,
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
  },
])

printContacts();
