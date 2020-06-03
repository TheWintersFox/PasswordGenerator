# PasswordGenerator
This repository is for creating a password generator


## Description 

This project was to create a working password generator that used 4 different types of text characters, those characters included..

-Uppercase
-Lowercase
-SpecialCharacters
-Numbers

Out of these 4 choices the user would be prompted after clicking the "generate password button".
After being prompted the user would then go through the following text to choose True or False statements.

---------

When going through the prompts the confirm or deny key is seen below

"OK" button is = True
That leaves the "cancel" button to be the = False

---------

The prompt would then ask the user for the length of characters between 8-120.  If the user chose numbers outside of this set criteria, an alert would prompt letting them know the criteria again to choose between 8-120.  

At this point in the code everything is nested within a function inside of an if statement for all of the previous prompts.  Then the user would go to through the possible use cases for this website. You can see all possible choices below in the (#Tests)

The password will then be written to the page after the user is done with confirming their #Test criteria.

The password will then display based on the below criteria on the true/false = confirm/deny's that they choose.

-------

# Tests

The tests you could run with this password generator = out to 16 possible user interactions.

Labeling those interactions below

✓ = True
✗ = False

01.
User confirms all 4 entries = uppercaseConfirm, lowercaseConfirm, specialConfirm, numericalConfirm = True
✓✓✓✓

02.
User denyed all 4 entries = uppercaseConfirm, lowercaseConfirm, specialConfirm, numericalConfirm = False
✗✗✗✗

03.
User confirms first three entries= uppercaseConfirm, lowercaseConfirm, specialConfirm = True  
User denyed last entry = numericalConfirm = False
✓✓✓✗

04.
User confirms first two entries = uppercaseConfirm, lowercaseConfirm = True
User denyed last two entries = specialConfirm, numericalConfirm = False 
✓✓✗✗

05.
User confirms first entry = uppercaseConfirm = True
User denyed last three entries = lowercaseConfirm, specialConfirm, numericalConfirm = False
✓✗✗✗

06.
User denys first three entries = uppercaseConfirm, lowercaseConfirm, specialConfirm = False
User Confirms last entry = numericalConfirm = True
✗✗✗✓

07.
User denys first two entries = uppercaseConfirm, lowercaseConfirm = False
User Confirms last two entries = specialConfirm, numericalConfirm = True
✗✗✓✓

08.
User denys first entry = uppercaseConfirm = False
User Confirms last three entries = lowercaseConfirm, specialConfirm, numericalConfirm = True
✗✓✓✓

09.
User Confirms first, third, and fourth entry = uppercaseConfirm, specialConfirm, numericalConfirm = True
User denys Second entry = lowercaseConfirm = False
✓✗✓✓

10.
User denys first, third, and last entry = uppercaseConfirm, specialConfirm, numericalConfirm = False
User Confirms Second entry = lowercaseConfirm = True
✗✓✗✗

11.
User denys first, second, and fourth entry = uppercaseConfirm, lowercaseConfirm, numericalConfirm = False
User Confirms third entry = specialConfirm = True
✗✗✓✗

12.
User Confirms first, second, and fourth entry = uppercaseConfirm, lowercaseConfirm, numericalConfirm = True
User denys third entry = specialConfirm = False
✓✓✗✓

13.
User Confirms first, and fourth entry = uppercaseConfirm, numericalConfirm = True
User denys second, and third entry = lowercaseConfirm, specialConfirm = False
✓✗✗✓

14.
User denys first, and fourth entry = uppercaseConfirm, numericalConfirm = False
User Confirms second, and third entry = lowercaseConfirm, specialConfirm = True
✗✓✓✗

15.
 User Confirms first, and third entry = uppercaseConfirm, special Confirm = True
 User denys second, and fourth entry = lowercaseConfirm, numericalConfirm = False
✓✗✓✗

16.
 User Confirms second, and fourth entry = uppercaseConfirm, special Confirm = True
 User denys first, and third entry = lowercaseConfirm, numericalConfirm = False
✗✓✗✓
