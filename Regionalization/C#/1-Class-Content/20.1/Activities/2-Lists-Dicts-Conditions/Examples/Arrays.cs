using System;

class Arrays
{

  static void Main (string[] args)
  {
    // $TYPE[] $NAME = new $TYPE[$CAPACITY]
    string[] names = new string[10];

    names[0] = "John";
    names[1] = "Jacob";
    names[2] = "Jingleheimer";
    names[3] = "Smith";

    // Etc...

    // The syntax for iteration is identical to that we use in JavaScript.
    for (int i = 0; i < names.Length; i += 1)
    {
      // Note that we print nothing for the indices w/o names.
      Console.WriteLine("The current name is " + names[i] + ".");
    }

    Console.WriteLine("---------");

    // We can use the friendlier foreach syntax, as well.
    foreach (string name in names)
    {
      if (name != null)
        Console.WriteLine("The current name is " + name + ".");
    }
  }

}
