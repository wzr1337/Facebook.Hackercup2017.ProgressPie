# Facebook Hacker Cup 2017 Qualification Round - Progress Pie


## Puzzle

Some progress bars fill you with anticipation. Some are finished before you know it and make you wonder why there was a progress bar at all.

Some progress bars progress at a pleasant, steady rate. Some are chaotic, lurching forward and then pausing for long periods. Some seem to slow down as they go, never quite reaching 100%.

Some progress bars are in fact not bars at all, but circles.

On your screen is a progress pie, a sort of progress bar that shows its progress as a sector of a circle. Envision your screen as a square on the plane with its bottom-left corner at (0, 0), and its upper-right corner at (100, 100). Every point on the screen is either white or black. Initially, the progress is 0%, and all points on the screen are white. When the progress percentage, P, is greater than 0%, a sector of angle (P% * 360) degrees is colored black, anchored by the line segment from the center of the square to the center of the top side, and proceeding clockwise.


While you wait for the progress pie to fill in, you find yourself thinking about whether certain points would be white or black at different amounts of progress.

Input
Input begins with an integer T, the number of points you're curious about. For each point, there is a line containing three space-separated integers, P, the amount of progress as a percentage, and X and Y, the coordinates of the point.

Output
For the ith point, print a line containing "Case #i: " followed by the color of the point, either "black" or "white".

Constraints
1 ≤ T ≤ 1,000 
0 ≤ P, X, Y ≤ 100 
Whenever a point (X, Y) is queried, it's guaranteed that all points within a distance of 10-6 of (X, Y) are the same color as (X, Y).

Explanation of Sample
In the first case all of the points are white, so the point at (55, 55) is of course white.

In the second case, (55, 55) is close to the filled-in sector of the circle, but it's still white.

In the third case, the filled-in sector of the circle now covers (55, 55), coloring it black.

Example input · DownloadExample output · Download
5
0 55 55
12 55 55
13 55 55
99 99 99
87 20 40
Case #1: white
Case #2: white
Case #3: black
Case #4: white
Case #5: black
