# PasswordGenerator
This repository is for creating a password generator


## Description 

Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).


## Table of Contents



---

## Tests

The tests you could run with this password generator = out to 16 possible user interactions.

Labeling those interactions below

✓ = True
✗ = False

01.
User confirms all 4 entries = uppercaseConfirm, lowercaseConfirm, specialConfirm, numericalConfirm = True
✓✓✓✓

02.
// User denyed all 4 entries = uppercaseConfirm, lowercaseConfirm, specialConfirm, numericalConfirm = False
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
 User denys second, and fourth entry = lowercaseConfirm, numericalConfirm = False15.
✓✗✓✗

16.
 User Confirms second, and fourth entry = uppercaseConfirm, special Confirm = True
 User denys first, and third entry = lowercaseConfirm, numericalConfirm = False
✗✓✗✓
