let contactStorage = []; // here is where you'll store your contacts
let longestName = "";
let longestEmail = "";

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
  console.log("Loading contact data...");
  for(let i = 0; i < contacts.length; i++){
    let con = contacts[i];
    if(con.first_name.length + con.last_name.length > longestName.length){
      longestName = con.first_name + " " + con.last_name;
    }
    if(con.email.length > longestEmail.length){
      longestEmail = con.email;
    }
    contactStorage.push(con);
  }
  console.log("...Finished loading contact data.\n");
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
  console.log("All Contacts:");
  let width1 = longestName.length + 4;
  let width2 = longestEmail.length + 3;
  let widthTot = width1 + width2;
  let height = contactStorage.length + 4;
  let contactsTable = new Array(height);
  let count = 0;
  for(let i = 0; i < height; i++){
    contactsTable[i] = new Array(widthTot);
    for(let j = 0; j < widthTot; j++){
      if(j === 0 || j === width1-1 || j === widthTot-1){
        contactsTable[i][j] = "|";
        if(j === width1-1 && i === 0 || j === width1-1 && i === 2 || j === width1-1 && i === height-1){
          contactsTable[i][j] = "+";
        }
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
}

const sortContacts = function(array){
  array = array.sort(function(a,b){
    let x = a.first_name.toLowerCase();
    let y = b.first_name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
}

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
    "first_name": "Tova",
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
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
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": "vcankett4@washington.edu",
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
    "first_name": "Willdon",
    "last_name": "Hedley",
    "email": "whedleyd@purevolume.com",
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
])

printContacts();
