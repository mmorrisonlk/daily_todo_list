# smu_daily_planner

https://mmorrisonlk.github.io/smu_daily_planner/

Organized the file and copied the starter code. My first two areas of focus will be getting any button to appear and save any text. I will also look at trying to get the current day displaying at the top of the website so I can have feel good "hopefully" easy progress.

So for this project I ended up trying something a little more painful at the time but I think pretty neat overall. I could have hard coded each of the times into the html/javascript. But that doesn't really challenge my coding skills and it isn't a scalable solution. 

My solution to scalability was to build the code dynamically using a for loop. The first goal was to get it to build one correctly with Javascript. After I had one building correctly. I needed it to build again correctly inside the for loop. Once that was resolved their came the issue of dynamically assigning IDs. I was able to accomplish this by calling them a set string plus the current i value since that would increment as part of the loop anyways.

At this point I had it working with a set value but I wanted it to work through a series of defined values. So I built an array of time value, importantly adding new values to this array *should* extend the planner without any hassle. The only thing would be to keep in mind the time formating so it matches moments expectation or the conditional formatting will break.
