# Process Material Descriptions

Each iteration has 1 overhead view and a number of detail images.

## Iteration #1 (Conservatory concept)

### 1 overhead image, 4 detail images

My initial concept for a victorian conservatory. A victorian conservatory, but the player is constranted to an adjacent room,
peering through the overgrowth to get glimpses of inside. The room the player was going to be more of a brutalist architectural style,
similar to the Barbican Centre in London.

I was happy with the overall idea of this, but as I worked on the blockout I realized that traversing the space the player was inside of
by primarily going up and down a few flights of stairs just wasn't very interesting, and was going to be hard to keep the players attention for any amount of time. Also, performance issues concerns with rendering so many plants at once

## iteration #2

- Screenshot 6

Starting to feel like my initial idea needed something extra to make it work, I found myself more drawn to the water in the scene than the architecture.
Started experimenting with darker, moodier lighting.
At this point I started thinking about the idea that maybe the water could be a swimming pool instead of a pond. Experimented with the addition some water slides into the conservatory layout

## Iteration #3

- Screenshots 7-12

Started totally restructuring the space and experimenting with the player being on a winding walkway overlooking a series of smaller rooms.
Immediately started feeling more spacially interesting and dynamic, like there's a short journey we're going on instead of just looking at a single, static big room
Also first appearance of a very rough sketch of hot tub/hot springs area

## Iteration #4

- Screenshots 14-18

An initial concept of a winding walkway that goes in a loop that connects at the beginning and end.
Funnily enough I ended up back at this basic layout after a bunch of iteration - winding river on the left, hot tub/pool area on the right, and symmetry tying the two together.
Ceiling beams going through the whole map for a sense of continueity

## Iteration #5

- Screenshots 19-20

Not a huge leap from #4. Starting to hash through my idea of howing the plants in raised planters.
Also breaking the space up into smaller rooms again

## Iteration #6

- Screenshots 21-25

Experimenting with adding a cave system to the center of the map that the river weaves an out of.
Also experimenting with making the hot tub/pool area on the right a crescent shape

## Iteration #7

- Screenshots 26-29

More experimenting with the shape of the pool area, this time making it a river that mysteriously disappears into the fog, implying the space we're inside of is larger than the area the player can explore right now
Also, playing with lighting, especially with the caves and giving the player peaks into the cave system while they're still outside of them

## Iteration #8

- Screenshots 30

Not too different to #7 - experimenting with the overall shape and size of the spaces, and the flow of the rivers

## Iteration #9

- Screenshots 31-33

Getting a bit bogged down/stuck with the overall layout, so at this point I switched to adding more fidelity and detail to different areas.
Had an idea for a waterfall the player walks behind that I liked and ended up keeping, as well as a spiral water slide (which I'm still not sure about)

## Iteration #10

- Screenshots 34-39

I felt pretty happy with the amount of ideating I'd done and felt I had all the pieces of the puzzle together, but hadn't really assembed them in a wholistic, easy-to-manage type way, as a result the scene was feeling very disjointed and overwhelming.
I've learned from experience this usually means it's time to edit and/or rebuild everything from scratch, so I started over with a cleaner, symmetrical layout, and started re-assemble everything in a more organized way.

- The waterfall became the center point of the journey, with the cave system connecting it and the beginning of the map. The winding river area on the left, and the hot springs/hot tub area on the right
- Entrance/exit is in the center bottom of the map & the walkway loops around counterclockwise that loops around to the beginning agaiin

## 40-57: iteration #11 1/2

- The layout feels really solid at this point, besides the cave area in the middle, which still feels a bit stale.
- Shifting into primarily focusing on fidelity/detail/beauty
- Lighting schemes delinete the different areas.

## 58-66: iteration #11 2/2

- Stuck closely with the layout from layout #10
- Also created a screen-space shader that adds a grain/dithered effect that I'm very happy with
- Layout-wise things are pretty much done - the only major area I need to work on is the cave area in the middle (feels a little stale right now, and might add some other smaller areas if I have time)

## 67-75 (hotsprings_1)

- Increasing fidelity starting to kit-bash together the details at this point
- Removing the final remnants of the waterpark idea, in favor or snowy dunes visible through the windows
- Adding some gradation hills at this point. Thinking about the contrast between having the player feel up high vs down close to the ground, and putting details both in the foreground & distance
- Still unsure of what to do with the connecting central area at this point
- Struggling with the exact layout of the hot tubs area, but having the general idea that it should feel busy and chaotic
- entrance lobby is the right shape, but no waterfall yet

## 76 - 86 (hotsprings_2)

- Creating the first iteration of animated waterfall, water reflection, snow, etc shaders
- Entrance has a waterfall now
- Generally adding more detail to oxbox river and cove areas. Cove area also has plants at this point
- Hot tub area is taking shape, and I've settled on a lighting scheme. Still feels too disorganized and un-cohesive
- Biggest change this iteration is I finally worked out what to do with the central area - 1 giant waterfall that feeds into all of the other water in the scene.
  Solves the issue of what to do with that space, while also explaining where all of this water is coming from

## 87-94 (hotsprings_3)

- Few layout changes in this iteration, mostly creating plants + beginning to add them to the scene
- First attempt at a flowing water shader. At this point experimenting to use vertex displacement for waves, which I later scrapped.
- Also first iteration of waterfall foam particle systems

## 95 - 100 (hotsprings_4)

- More general fidelity, complexity
- Applying water reflection shader to more surfaces
- Created a "combined" water shader that is used for flowing water, waterfalls, and hot tub water (previously they were seperate)
- The combined water shader uses a "foam map", which is used to control how much foam appears in a given area
- Getting a lot closer to the final layout for the hot tub area
- Entrance area taking shape with wood columns and rocky waterfall area

## Outtakes

1. Turning off most of the lights in waterfall_10 and an isometric camera angle. A composition idea for some point
2. An unintentionally pleasing grouping of debug plant assets (waterpark_5-10, can't remember)
3. Conservatory file with messed-up material imports - I kind of like these huge leaves (conservatory_1)
4. Same as 3. but from a different angle.
5. Liminal swamp space (waterpark_3)
6. More liminal swamp space (waterpark_6)
7. More liminal swamp space (waterpark_9)
8. Custom materials replaced with default shiny materials (hotsprings_3)
9. Exporting the scene from blender with the wrong export settings (hotsprings_3)
10. same as above (hotsprings_3)
11. same as above (hotsprings_3)
12. The messy underside (hotsprings_4)
13. Glossy shiny default unity materials land (hotsprings_8)
14. same as above (hotsprings_8)
15. wrong export settings (hotsprings_8)
