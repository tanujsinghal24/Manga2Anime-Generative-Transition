# Manga2Anime-Generative-Transition
This is a fun personal project to create a seamless transition from an existing comic (manga, manhwa, DC/Marvel comic) page to the exact sequence in its animation adaptation, with the in-between frame sequence generated at runtime or cached using a Write-Ahead Log (WAL).
All content used is for experimentation and is not owned by me. This is an open personal project for learning and exploration only.

Target:
Swap from the Reader Web App ➝ to a Player App (any with time-tag support).
The player app is responsible for preloading the episode and playing from a specified timestamp.
Currently, both the player and reader are combined into a single simple web app.

Current Transition Generation:
PIL image blending: Generates 16 frames

Generative Stable Diffusion: Uses from–to encoding/decoding with loss and model from hugging face
Supports 1-second transitions

Future Prospects:
Attach a RAG (Retrieval-Augmented Generation) model for dynamic mapping between comic content and animation frame hotspots

Enable runtime transition generation using:

Stable Diffusion (for quality)

WebGL (for performance on supported devices)

More info & Sources:
The example used is from One Punch Man:
Manga page sourced from: https://readonepunch-man.com/
Anime clip sourced from a publicly available YouTube video (random, non-owned source)
All content used is for experimentation and is not owned by me. This is an open personal project for learning and exploration only.

One Punch Man is a manga series created by artist ONE and illustrated by Yusuke Murata. Read one punch man manga online. it follows Saitama, the main protagonist who had no clear future so he decided to become a superhero for fun.
