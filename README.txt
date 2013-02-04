This project is a port of the Java project that Jason Gorman will be using to gather empirical evidence about the costs of TDD.
You can read about the experiment here http://www.codemanship.co.uk/parlezuml/blog/?postid=1021 and 
here http://www.codemanship.co.uk/parlezuml/blog/?postid=1019

You will need to do the Roman Numeral kata twice, several days apart (just so it's not fresh in your mind the second time you do it.)
	Do it once practicing rigorous TDD. 
	Then, at least a few days later, do it without any unit testing at all.

Instructions:
0. Select either the TDD or non-TDD experiment
1. Open up the TestDrivenDevelopmentCodeLab.sln solution
2. Start a timer.
3. Write the code to make the Convert method turn each number from 1-4999 into the correct Roman Numeral string.
4. When you think you're done, open QADeployment\AcceptanceTests.nunit with the NUnit GUI and run the Acceptance Tests.
	Don't stop the clock while the Acceptance Tests run.
	DO NOT RUN THE Acceptance Tests UNTIL YOU THINK YOU ARE FINISHED.
		Your QA group probably doesn't appreciate getting piles of software that the 
		developers KNOW doesn't work, now do they?  Also, there is a ~2 minute delay 
		to get results from the Acceptance Tests, so there's incentive to have it right 
		before you "throw it over the wall."
5. If any of the Acceptance Tests fail
	Fix them ALL then - only when you think you have fixed all the bugs - go back to step 3.
6. Stop the timer and record your results.
7. Wait a few days and repeat the kata using the opposite practice.
8. Report your results to jason.gorman@codemanship.com. 

When you report your results, please include as much of the following information as you can:
	The total time it took to complete each time you run the experiment.
		You can to as many attempts an you want; no need to stop at one time TDD and one time not TDD.
	Lines of Code, Cyclomatic Completixty and any other code metrics you think may be relevant for each solution.
	Your level of experience with the JavaScript.
	Your level of experience with TDD.
	A comparison of the solutions you created. 
		Did you think 1 solution was cleaner, better than the other? 
		Did you refactor one more than the other?
	Any other thoughts you have on the experiment and your results.

Optionally, you can record screencasts of your experiences. (CamStudio should work on Windows)

In case you forgot, here are the rules for Roman Numerals are found here: http://en.wikipedia.org/wiki/Roman_numerals