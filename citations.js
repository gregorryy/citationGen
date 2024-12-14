const citations = [
  {
    author: "Peter Drucker",
    text: "La meilleure façon de prédire l’avenir est de le créer.",
  },
  {
    author: "Anonyme",
    text: "Je ne suis pas paresseux, je suis en mode économie d’énergie.",
  },
  {
    author: "Benjamin Disraeli",
    text: "La vie est trop courte pour être petite.",
  },
  {
    author: "Proverbe paresseux",
    text: "Si tu veux être heureux, ne sois jamais à l’heure.",
  },
  {
    author: "Charlie Chaplin",
    text: "Un jour sans rire est un jour perdu.",
  },
  {
    author: "Proverbe humoristique",
    text: "L’intelligence, c’est comme les sous-vêtements : il faut en avoir, mais ne pas les montrer.",
  },
  {
    author: "Abraham Lincoln",
    text: "Le problème avec les citations sur Internet, c’est qu’on ne peut jamais vérifier leur authenticité.",
  },
  {
    author: "Anonyme",
    text: "La paresse est la clé du progrès. Si personne n’avait été paresseux, on n’aurait jamais inventé la roue.",
  },
  {
    author: "Alice Tremblay",
    text: "La vie, c’est comme un ascenseur : parfois on monte, parfois on descend.",
  },
  {
    author: "Pierre Desproges",
    text: "On peut rire de tout, mais pas avec tout le monde.",
  },
  {
    author: "Emma Leroy",
    text: "Le café résout presque tous les problèmes. Sauf le manque de café.",
  },
  {
    author: "Mark Twain",
    text: "Les bonnes idées commencent souvent par un ‘et si…’.",
  },
  {
    author: "Jean Lefort",
    text: "Si vous tombez, c’est peut-être parce que vous regardez trop en arrière.",
  },
  {
    author: "Anonyme",
    text: "L’argent ne fait pas le bonheur… mais il achète du chocolat, et c’est presque pareil.",
  },
  {
    author: "Albert Dupont",
    text: "Un échec n’est qu’un succès déguisé en expérience.",
  },
  {
    author: "Winston Churchill",
    text: "L’optimiste voit l’opportunité dans chaque difficulté.",
  },
  {
    author: "Charles Pinchon",
    text: "Pourquoi courir alors qu’on peut marcher… ou mieux, s’asseoir ?",
  },
  {
    author: "James Dean",
    text: "Rêve comme si tu vivais pour toujours, vis comme si tu mourais aujourd’hui.",
  },
  {
    author: "Saint Augustin",
    text: "Le bonheur, c’est de continuer à désirer ce qu’on possède.",
  },
  {
    author: "Jacques Martineau",
    text: "Un ordinateur est comme une femme : tu dois apprendre à le comprendre.",
  },
  {
    author: "Anonyme",
    text: "La vie est une soupe, et moi, je suis une fourchette.",
  },
  {
    author: "Confucius",
    text: "Le succès, c’est de se lever une fois de plus qu’on est tombé.",
  },
  {
    author: "Lucie Vernet",
    text: "Je suis multitâche : je peux procrastiner et m’inquiéter en même temps.",
  },
  {
    author: "Jack Ma",
    text: "Il vaut mieux être optimiste et se tromper que pessimiste et avoir raison.",
  },
  {
    author: "Anonyme",
    text: "Le seul moment où tu devrais regarder en arrière, c’est pour voir combien tu as avancé.",
  },
  {
    author: "Victor Hugo",
    text: "Un enfant qui rit a compris quelque chose que l’adulte a oublié.",
  },
  {
    author: "Dalaï Lama",
    text: "Le silence est parfois la meilleure réponse.",
  },
  {
    author: "Mary Antoinette",
    text: "Le chat est un lion en miniature qui préfère dormir.",
  },
  {
    author: "Albert Einstein",
    text: "La créativité, c’est l’intelligence qui s’amuse.",
  },
  {
    author: "Gustave Lemay",
    text: "Celui qui n’avance pas recule, sauf sur un tapis roulant.",
  },
  {
    author: "Sarah Dupuis",
    text: "Les meilleures idées viennent sous la douche. Malheureusement, personne n’a encore inventé un carnet étanche.",
  },
  {
    author: "Proverbe inconnu",
    text: "Les excuses sont des ponts vers le néant.",
  },
  {
    author: "George S. Patton",
    text: "Un bon plan aujourd’hui vaut mieux qu’un parfait demain.",
  },
  {
    author: "Louise Martin",
    text: "L’échec est une étape vers la réussite, mais on pourrait se passer de certaines étapes.",
  },
  {
    author: "Boris Vian",
    text: "L’humour est la politesse du désespoir.",
  },
  {
    author: "Anonyme",
    text: "Mieux vaut tard que vraiment trop tard.",
  },
  {
    author: "Proverbe africain",
    text: "Si tu veux aller vite, va seul. Si tu veux aller loin, va accompagné.",
  },
  {
    author: "Kevin Leroux",
    text: "La seule chose que je comprends des maths, c’est qu’elles ne m’aiment pas.",
  },
  {
    author: "Anonyme",
    text: "La patience est une vertu, mais pas quand il s’agit de pizza.",
  },
  {
    author: "Henry David Thoreau",
    text: "Ne vis pas pour travailler, travaille pour vivre.",
  },
  {
    author: "Anonyme",
    text: "Rien ne dure éternellement… sauf peut-être les factures.",
  },
  {
    author: "Clara Michel",
    text: "Le vrai bonheur, c’est un croissant chaud avec un café.",
  },
  {
    author: "John C. Maxwell",
    text: "Les rêves ne fonctionnent que si toi, tu travailles.",
  },
  {
    author: "Voltaire",
    text: "J’ai décidé d’être heureux parce que c’est bon pour la santé.",
  },
  {
    author: "Anonyme",
    text: "Si la vie te donne des citrons, demande aussi du sucre et de l’eau.",
  },
  {
    author: "Franklin D. Roosevelt",
    text: "La seule limite à notre réalisation de demain, ce sont nos doutes d’aujourd’hui.",
  },
  {
    author: "Simone Lemoine",
    text: "La vérité sort de la bouche des enfants… et parfois, elle fait mal.",
  },
  {
    author: "Proverbe chinois",
    text: "Le meilleur moment pour commencer était hier. Le deuxième meilleur moment, c’est maintenant.",
  },
  {
    author: "Alexandre Martin",
    text: "Le monde appartient à ceux qui se lèvent tôt… ou à ceux qui ont du café.",
  },
  {
    author: "Léonard de Vinci",
    text: "La simplicité est la sophistication suprême.",
  },
];
