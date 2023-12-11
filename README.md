# Starry Night Sky Creator

### Project overview
My Casual Creator allows users to create an alternate sky for Starry Night by
Van Gogh, which is one of my favorite paintings. The user can create both swirls
and stars in whatever patterns they would like. I think my project keeps the 
user engaged because it offers multiple modes for creation, and because each 
time the user runs the program, the colors and shapes of each swirl and star 
will be different. The user can be proud of their creation because making the 
swirls look aesthetic isn't easy, and because the relative placement of stars 
and swirls is key to the final result (meaning that more skilled users can make
much better results than unskilled ones). 

### Personally Meaningful
This system is personally meaningful to me because Starry Night is one of my 
favorite paintings. I'm typically not a very big fan of art, but I think Van 
Gogh's style is very cool. The swirls are mesmerizing and the way he combines 
totally different colors into one smooth shape is impressive. I got the chance 
to see Starry Night in the MET in NYC last summer, and it looked great in 
person too. The organization of stars and swirls always seemed a little random 
to me, so I thought it would be cool to see what different organizations of 
shapes would make the painting look like.

### Challenge
This system challenged me as a computer scientist because I've never really 
worked with art and coding before. I'm typically a logic-oriented person and 
algorithms make sense to me, but creating art with code doesn't. It was very 
challenging for me to determine what swirls and stars should look like, and to
come up with new ideas when things I tried didn't work. I pushed myself during 
this project by trying out a number of different style techniques before 
settling on one. I tried making bezier curves for swirls, all sorts of paint 
strokes for stars, and more. I also experimented a lot with using the colors 
from the original painting during swirls, which ended up being pretty cool! 
One next step for me could be to continue improving the system so that each 
swirl is distinguishable from the others. That would give the sky a more 
similar look to the original painting, rather than a mesh between all of the 
swirls the user draws.

### Bugs
I haven't found any bugs in the code so far. It does get rather slow when there
are a lot of swirls and stars created, however.

### External Sources
I used a lot of documentation when writing this code. Specifically, this 
example project (https://p5js.org/examples/interaction-follow-3.html) helped me 
create lines that follow the mouse. However, I heavily adapted the example to 
fit my own needs.

Also, I was inspired by a Reddit post about painting with Processing 
(https://www.reddit.com/r/processing/comments/djh7ya/procedural_brush_strokes_using_bezier_curves_code/
). I heavily adapted this code also, but it inspired some of my thinking about 
how to mimic brush strokes.

### Usage Instructions:
1. The program has two modes (swirl mode and star mode) and the user can switch
 between the two by pressing the 'x' key.
2. In swirl mode, click and move the mouse to create a night sky swirl. Click 
again to stop the swirl. The colors will change based on the mouse's position 
in the painting.
3. In star mode, click to create a new star.