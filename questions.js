const questionsDB = {

  /* =========================================================
     SUBJECT 1 : ENGLISH
  ========================================================= */
  english: {
    sections: {
      "Grammar": {
        easy: [
          { q: "Fill in: I ___ a student.", options: ["is", "am", "are", "be"], answer: 1, explanation: "I ke saath 'am'." },
          { q: "Fill in: He ___ his homework yesterday.", options: ["do", "does", "did", "doing"], answer: 2, explanation: "Yesterday → did." },
          { q: "Fill in: He is ___ honest man.", options: ["a", "an", "the", "none"], answer: 1, explanation: "Vowel sound → an." },
          { q: "Correct sentence:", options: ["She don't like tea.", "She doesn't like tea.", "She not like tea.", "She no like tea."], answer: 1, explanation: "3rd person → doesn't." }
        ],
        moderate: [
          { q: "Fill in: If I ___ rich, I would travel.", options: ["am", "was", "were", "will be"], answer: 2, explanation: "Hypothetical → were." },
          { q: "Fill in: Neither of the boys ___ present.", options: ["are", "were", "was", "have"], answer: 2, explanation: "Neither of → singular verb." },
          { q: "Fill in: He has been living here ___ 2010.", options: ["for", "since", "from", "by"], answer: 1, explanation: "Point of time → since." },
          { q: "Correct sentence:", options: ["He is senior than me.", "He is senior to me.", "He is more senior than me.", "He is senior from me."], answer: 1, explanation: "Latin comparative → to." }
        ],
        hard: [
          { q: "Fill in: Scarcely had I reached ___ the bell rang.", options: ["than", "when", "then", "that"], answer: 1, explanation: "Scarcely...when." },
          { q: "Fill in: No sooner did he see the police ___ he ran.", options: ["when", "then", "than", "that"], answer: 2, explanation: "No sooner...than." },
          { q: "Fill in: It is high time we ___ the truth.", options: ["tell", "told", "will tell", "have told"], answer: 1, explanation: "It is high time + past subjunctive." },
          { q: "Fill in: The jury ___ divided in their opinions.", options: ["was", "were", "is", "has"], answer: 1, explanation: "Divided members → plural verb." }
        ]
      },

      "Vocabulary": {
        easy: [
          { q: "Synonym of 'Begin':", options: ["Start", "End", "Stop", "Finish"], answer: 0, explanation: "Begin = Start." },
          { q: "Antonym of 'Ancient':", options: ["Old", "Modern", "Historic", "Past"], answer: 1, explanation: "Ancient ka opposite Modern." },
          { q: "Synonym of 'Big':", options: ["Small", "Tiny", "Large", "Little"], answer: 2, explanation: "Big = Large." },
          { q: "Antonym of 'Friend':", options: ["Ally", "Enemy", "Companion", "Buddy"], answer: 1, explanation: "Friend ka opposite Enemy." }
        ],
        moderate: [
          { q: "Synonym of 'Candid':", options: ["Rude", "Frank", "Shy", "Rough"], answer: 1, explanation: "Candid = Frank." },
          { q: "Antonym of 'Frugal':", options: ["Thrifty", "Extravagant", "Careful", "Saving"], answer: 1, explanation: "Frugal ka opposite Extravagant." },
          { q: "Synonym of 'Diligent':", options: ["Lazy", "Hardworking", "Careless", "Idle"], answer: 1, explanation: "Diligent = mehnati." },
          { q: "Antonym of 'Conceal':", options: ["Hide", "Reveal", "Cover", "Bury"], answer: 1, explanation: "Conceal ka opposite Reveal." }
        ],
        hard: [
          { q: "Synonym of 'Pusillanimous':", options: ["Brave", "Cowardly", "Proud", "Wise"], answer: 1, explanation: "Pusillanimous = kayar." },
          { q: "Antonym of 'Prolific':", options: ["Productive", "Barren", "Creative", "Fruitful"], answer: 1, explanation: "Prolific ka opposite Barren." },
          { q: "Synonym of 'Ubiquitous':", options: ["Rare", "Omnipresent", "Hidden", "Scarce"], answer: 1, explanation: "Ubiquitous = har jagah." },
          { q: "Antonym of 'Garrulous':", options: ["Talkative", "Taciturn", "Chatty", "Loquacious"], answer: 1, explanation: "Garrulous ka opposite Taciturn." }
        ]
      },

      "Idioms & Phrases": {
        easy: [
          { q: "'Once in a blue moon' means:", options: ["Very often", "Very rarely", "Daily", "Never"], answer: 1, explanation: "Bohot kam." },
          { q: "'Piece of cake' means:", options: ["Hard task", "Very easy task", "Sweet dish", "Party"], answer: 1, explanation: "Bohot aasan kaam." },
          { q: "'Break a leg' means:", options: ["Get hurt", "Good luck", "Run fast", "Fall down"], answer: 1, explanation: "Good luck bolna." },
          { q: "'Hit the books' means:", options: ["Throw books", "Study hard", "Buy books", "Read casually"], answer: 1, explanation: "Padhai karna." }
        ],
        moderate: [
          { q: "'Let the cat out of the bag':", options: ["Free animal", "Reveal a secret", "Make noise", "Run away"], answer: 1, explanation: "Secret reveal karna." },
          { q: "'A bolt from the blue':", options: ["Loud noise", "Sudden shock", "Blue sky", "Lightning"], answer: 1, explanation: "Achanak shock." },
          { q: "'Bury the hatchet':", options: ["Dig hole", "Make peace", "Fight", "Hide"], answer: 1, explanation: "Dushmani bhulana." },
          { q: "'Smell a rat':", options: ["Smell bad", "Suspect something", "See a rat", "Be dirty"], answer: 1, explanation: "Shak karna." }
        ],
        hard: [
          { q: "'To play to the gallery':", options: ["Act on stage", "Seek popular approval", "Paint", "Fool people"], answer: 1, explanation: "Janta ko khush karna." },
          { q: "'To burn the midnight oil':", options: ["Waste oil", "Work late into the night", "Light fire", "Sleep early"], answer: 1, explanation: "Raat bhar mehnat karna." },
          { q: "'To carry coals to Newcastle':", options: ["Unnecessary work", "Carry goods", "Travel", "Help someone"], answer: 0, explanation: "Fizool kaam." },
          { q: "'To turn a deaf ear':", options: ["Hear carefully", "Ignore", "Be deaf", "Listen"], answer: 1, explanation: "Dhyan na dena." }
        ]
      },

      "One Word Substitution": {
        easy: [
          { q: "One who cannot read or write:", options: ["Ignorant", "Illiterate", "Innocent", "Idiot"], answer: 1, explanation: "Illiterate." },
          { q: "Place where books are kept:", options: ["Museum", "Library", "Gallery", "Archives"], answer: 1, explanation: "Library." },
          { q: "Person who flies aircraft:", options: ["Driver", "Pilot", "Sailor", "Captain"], answer: 1, explanation: "Pilot." },
          { q: "Doctor who treats children:", options: ["Cardiologist", "Pediatrician", "Dermatologist", "Neurologist"], answer: 1, explanation: "Pediatrician." }
        ],
        moderate: [
          { q: "Speech without preparation:", options: ["Extempore", "Oratory", "Monologue", "Soliloquy"], answer: 0, explanation: "Extempore." },
          { q: "Government by the people:", options: ["Monarchy", "Democracy", "Autocracy", "Oligarchy"], answer: 1, explanation: "Democracy." },
          { q: "Lover of mankind:", options: ["Misanthrope", "Philanthropist", "Egoist", "Altruist"], answer: 1, explanation: "Philanthropist." },
          { q: "Place where bees are kept:", options: ["Aviary", "Apiary", "Aquarium", "Zoo"], answer: 1, explanation: "Apiary." }
        ],
        hard: [
          { q: "Easily deceived:", options: ["Cynic", "Gullible", "Stubborn", "Skeptic"], answer: 1, explanation: "Gullible." },
          { q: "Speaks many languages:", options: ["Bilingual", "Polyglot", "Linguist", "Orator"], answer: 1, explanation: "Polyglot." },
          { q: "Self-contradictory statement:", options: ["Paradox", "Parody", "Parable", "Parallel"], answer: 0, explanation: "Paradox." },
          { q: "Indifferent to pleasure & pain:", options: ["Stoic", "Hedonist", "Optimist", "Realist"], answer: 0, explanation: "Stoic." }
        ]
      }
    }
  },

  /* =========================================================
     SUBJECT 2 : GK
  ========================================================= */
  gk: {
    sections: {
      "Static GK": {
        easy: [
          { q: "National animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: 1, explanation: "Tiger." },
          { q: "Capital of India?", options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"], answer: 2, explanation: "New Delhi." },
          { q: "National bird of India?", options: ["Parrot", "Crow", "Peacock", "Eagle"], answer: 2, explanation: "Peacock." },
          { q: "Currency of India?", options: ["Dollar", "Euro", "Rupee", "Yen"], answer: 2, explanation: "Indian Rupee." }
        ],
        moderate: [
          { q: "Largest continent?", options: ["Africa", "Europe", "Asia", "Australia"], answer: 2, explanation: "Asia." },
          { q: "Smallest country?", options: ["Monaco", "Vatican City", "Nauru", "San Marino"], answer: 1, explanation: "Vatican City." },
          { q: "Longest river in world?", options: ["Amazon", "Nile", "Ganga", "Yangtze"], answer: 1, explanation: "Nile." },
          { q: "Largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3, explanation: "Pacific Ocean." }
        ],
        hard: [
          { q: "Largest desert in world?", options: ["Sahara", "Thar", "Antarctica", "Gobi"], answer: 2, explanation: "Antarctica (cold desert)." },
          { q: "When is World Environment Day?", options: ["5 June", "5 July", "22 April", "1 May"], answer: 0, explanation: "5 June." },
          { q: "Which planet is Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1, explanation: "Mars." },
          { q: "First Indian in space?", options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"], answer: 1, explanation: "Rakesh Sharma (1984)." }
        ]
      },

      "Books & Authors": {
        easy: [
          { q: "Who wrote the National Anthem of India?", options: ["Bankim Chandra", "Rabindranath Tagore", "Premchand", "Iqbal"], answer: 1, explanation: "Tagore." },
          { q: "Who wrote the National Song?", options: ["Tagore", "Bankim Chandra Chatterjee", "Premchand", "Iqbal"], answer: 1, explanation: "Bankim Chandra." },
          { q: "'Discovery of India' kisne likhi?", options: ["Gandhi", "Nehru", "Tagore", "Ambedkar"], answer: 1, explanation: "Jawaharlal Nehru." },
          { q: "'Wings of Fire' kiski hai?", options: ["Nehru", "APJ Kalam", "Ambedkar", "Tagore"], answer: 1, explanation: "Dr. APJ Abdul Kalam." }
        ],
        moderate: [
          { q: "'Wealth of Nations' kisne likhi?", options: ["Karl Marx", "Adam Smith", "Keynes", "Ricardo"], answer: 1, explanation: "Adam Smith." },
          { q: "'Mein Kampf' kiski hai?", options: ["Mussolini", "Hitler", "Stalin", "Lenin"], answer: 1, explanation: "Adolf Hitler." },
          { q: "'Ramayana' kisne likhi?", options: ["Ved Vyas", "Valmiki", "Tulsidas", "Kalidasa"], answer: 1, explanation: "Maharishi Valmiki." },
          { q: "'Mahabharata' kisne likhi?", options: ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidasa"], answer: 1, explanation: "Ved Vyas." }
        ],
        hard: [
          { q: "'The Origin of Species' kisne likhi?", options: ["Newton", "Darwin", "Einstein", "Mendel"], answer: 1, explanation: "Charles Darwin." },
          { q: "'Republic' kisne likhi?", options: ["Aristotle", "Plato", "Socrates", "Homer"], answer: 1, explanation: "Plato." },
          { q: "'Das Kapital' kisne likhi?", options: ["Marx", "Engels", "Lenin", "Stalin"], answer: 0, explanation: "Karl Marx." },
          { q: "'Geetanjali' kisne likhi?", options: ["Tagore", "Bankim", "Premchand", "Iqbal"], answer: 0, explanation: "Rabindranath Tagore." }
        ]
      },

      "Sports & Awards": {
        easy: [
          { q: "How many players in a cricket team?", options: ["9", "10", "11", "12"], answer: 2, explanation: "11 players." },
          { q: "National game of India (traditionally)?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], answer: 1, explanation: "Hockey." },
          { q: "Olympic Games kitne saal me hote hain?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Har 4 saal." },
          { q: "Sachin Tendulkar kis game se juda hai?", options: ["Hockey", "Cricket", "Tennis", "Football"], answer: 1, explanation: "Cricket." }
        ],
        moderate: [
          { q: "Bharat Ratna kis saal shuru hua?", options: ["1950", "1954", "1955", "1960"], answer: 1, explanation: "1954." },
          { q: "First Indian to win individual Olympic gold?", options: ["Sushil Kumar", "Abhinav Bindra", "Vijender Singh", "Mary Kom"], answer: 1, explanation: "Abhinav Bindra (2008, shooting)." },
          { q: "Dronacharya Award kis field me diya jata hai?", options: ["Literature", "Coaching", "Acting", "Science"], answer: 1, explanation: "Sports coaching." },
          { q: "Wimbledon kis sport se related hai?", options: ["Badminton", "Tennis", "Cricket", "Football"], answer: 1, explanation: "Tennis." }
        ],
        hard: [
          { q: "How many times has India won Cricket World Cup?", options: ["1", "2", "3", "4"], answer: 1, explanation: "2 times (1983, 2011)." },
          { q: "Who is 'Flying Sikh' of India?", options: ["Milkha Singh", "Neeraj Chopra", "PT Usha", "Dhyan Chand"], answer: 0, explanation: "Milkha Singh." },
          { q: "First woman to win Olympic medal for India?", options: ["Saina Nehwal", "Karnam Malleswari", "Mary Kom", "PV Sindhu"], answer: 1, explanation: "Karnam Malleswari (2000, weightlifting)." },
          { q: "First Indian woman to win Olympic silver?", options: ["Saina Nehwal", "PV Sindhu", "Mary Kom", "Sakshi Malik"], answer: 1, explanation: "PV Sindhu (2016)." }
        ]
      },

      "Important Days": {
        easy: [
          { q: "Independence Day of India?", options: ["26 Jan", "15 Aug", "2 Oct", "14 Nov"], answer: 1, explanation: "15 August." },
          { q: "Republic Day of India?", options: ["26 Jan", "15 Aug", "2 Oct", "14 Nov"], answer: 0, explanation: "26 January." },
          { q: "Gandhi Jayanti?", options: ["15 Aug", "26 Jan", "2 Oct", "14 Nov"], answer: 2, explanation: "2 October." },
          { q: "Children's Day in India?", options: ["14 Nov", "15 Aug", "1 May", "5 Sept"], answer: 0, explanation: "14 November." }
        ],
        moderate: [
          { q: "International Women's Day?", options: ["8 March", "1 May", "5 June", "10 Dec"], answer: 0, explanation: "8 March." },
          { q: "World Health Day?", options: ["7 April", "5 June", "1 Dec", "10 Oct"], answer: 0, explanation: "7 April." },
          { q: "International Yoga Day?", options: ["21 June", "5 June", "1 July", "21 May"], answer: 0, explanation: "21 June." },
          { q: "Human Rights Day?", options: ["10 Dec", "5 June", "1 May", "7 April"], answer: 0, explanation: "10 December." }
        ],
        hard: [
          { q: "United Nations Day?", options: ["24 Oct", "10 Dec", "5 June", "1 May"], answer: 0, explanation: "24 October." },
          { q: "World AIDS Day?", options: ["1 Dec", "5 June", "24 Oct", "7 April"], answer: 0, explanation: "1 December." },
          { q: "National Science Day in India?", options: ["28 Feb", "5 Sept", "1 May", "14 Nov"], answer: 0, explanation: "28 February (Raman Effect)." },
          { q: "Teachers' Day in India?", options: ["5 Sept", "14 Nov", "2 Oct", "1 May"], answer: 0, explanation: "5 September." }
        ]
      }
    }
  },

  /* =========================================================
     SUBJECT 3 : GS
  ========================================================= */
  gs: {
    sections: {
      "Indian Polity": {
        easy: [
          { q: "How many Fundamental Rights?", options: ["5", "6", "7", "8"], answer: 1, explanation: "6 Fundamental Rights." },
          { q: "Head of state of India?", options: ["PM", "President", "CJI", "Governor"], answer: 1, explanation: "President." },
          { q: "Father of Indian Constitution?", options: ["Nehru", "Ambedkar", "Rajendra Prasad", "Patel"], answer: 1, explanation: "Dr. B.R. Ambedkar." },
          { q: "Maximum strength of Lok Sabha?", options: ["545", "550", "552", "560"], answer: 2, explanation: "552 (max)." }
        ],
        moderate: [
          { q: "National Emergency under which Article?", options: ["352", "356", "360", "370"], answer: 0, explanation: "Article 352." },
          { q: "Money Bill introduced only in?", options: ["Rajya Sabha", "Lok Sabha", "Either", "SC"], answer: 1, explanation: "Only Lok Sabha (Art. 110)." },
          { q: "Article 356 deals with?", options: ["National Emergency", "President's Rule", "Financial Emergency", "Fundamental Rights"], answer: 1, explanation: "President's Rule." },
          { q: "President's term?", options: ["4 yrs", "5 yrs", "6 yrs", "7 yrs"], answer: 1, explanation: "5 years." }
        ],
        hard: [
          { q: "Right to Education under which Article?", options: ["19", "21", "21A", "32"], answer: 2, explanation: "Article 21A (86th Amendment)." },
          { q: "Anti-defection law in which Schedule?", options: ["8th", "9th", "10th", "11th"], answer: 2, explanation: "10th Schedule (52nd Amendment)." },
          { q: "Article 32 is called?", options: ["Heart of Constitution", "Soul of Constitution", "Backbone", "Head"], answer: 0, explanation: "Heart & Soul of Constitution." },
          { q: "Rajya Sabha maximum strength?", options: ["238", "245", "250", "252"], answer: 2, explanation: "250." }
        ]
      },

      "Science": {
        easy: [
          { q: "Largest gland in human body?", options: ["Pancreas", "Liver", "Thyroid", "Pituitary"], answer: 1, explanation: "Liver." },
          { q: "Planet closest to Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], answer: 1, explanation: "Mercury." },
          { q: "Gas used in balloons?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: 2, explanation: "Helium." },
          { q: "Photosynthesis releases?", options: ["CO2", "Oxygen", "Nitrogen", "Hydrogen"], answer: 1, explanation: "Oxygen." }
        ],
        moderate: [
          { q: "Hardest natural substance?", options: ["Iron", "Diamond", "Quartz", "Gold"], answer: 1, explanation: "Diamond." },
          { q: "Smallest bone in body?", options: ["Stapes", "Femur", "Tibia", "Radius"], answer: 0, explanation: "Stapes (ear)." },
          { q: "Acid in stomach?", options: ["H2SO4", "HCl", "HNO3", "CH3COOH"], answer: 1, explanation: "HCl." },
          { q: "Vitamin in citrus fruits?", options: ["A", "B", "C", "D"], answer: 2, explanation: "Vitamin C." }
        ],
        hard: [
          { q: "Atomic number of Carbon?", options: ["4", "6", "8", "12"], answer: 1, explanation: "6." },
          { q: "pH of pure water?", options: ["5", "6", "7", "8"], answer: 2, explanation: "pH = 7 (neutral)." },
          { q: "SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, explanation: "Newton (N)." },
          { q: "Dry ice is:", options: ["Solid CO2", "Solid N2", "Solid O2", "Solid H2"], answer: 0, explanation: "Solid CO2." }
        ]
      },

      "History": {
        easy: [
          { q: "Who was the first PM of India?", options: ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Gandhi"], answer: 1, explanation: "Jawaharlal Nehru." },
          { q: "Who was the first President of India?", options: ["Nehru", "Rajendra Prasad", "Radhakrishnan", "Zakir Hussain"], answer: 1, explanation: "Dr. Rajendra Prasad." },
          { q: "Father of the Nation?", options: ["Nehru", "Mahatma Gandhi", "Bhagat Singh", "Patel"], answer: 1, explanation: "Mahatma Gandhi." },
          { q: "First war of Indian Independence?", options: ["1857", "1867", "1877", "1887"], answer: 0, explanation: "1857." }
        ],
        moderate: [
          { q: "Who discovered America?", options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"], answer: 1, explanation: "Columbus (1492)." },
          { q: "Who wrote National Anthem?", options: ["Bankim", "Tag
