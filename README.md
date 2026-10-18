# group20-hajime-capstone | TS Academy
Capstone project by TS Academy Hajime cohort Frontend Development Group 20.

## Table of Contents

- [Live Demo](#live-demo)
- [Repository](#repository)
- [Project Summary](#project-summary)
- [Built With](#built-with)
- [Meet the Team](#meet-the-team)
    - [Team Member Info](#team-member-info)
    - [Work Breakdown](#work-breakdown)
        - [By component](#by-component)
        - [By function](#by-function)
        - [Support](#support)
- [Want to run our project?](#want-to-run-our-project)
- [Project Structure](#project-structure)
- [How We Worked](#how-we-worked)
- [Acknowledgments](#acknowledgments)


## Live Demo
<https://group20-hajime-frontend.netlify.app>

## Repository
<https://github.com/Aristotess-Biri/group20-hajime-frontend-capstone>

## Project Summary
<!-- Screenshot of page -->

A responsive web application that fetches planet data from an API and lets users search for a planet to view its stats, alongside a static table of facts about our solar system. 

The entire interface supports both light and dark modes, with full hover, focus, and error states, and adapts to mobile, tablet, and desktop screens.

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>


## Built With
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>

## Meet the Team
### Team Member Info

| **Name** | **GitHub profile** |
| --- | --- |
| Ufuophu-Biri Aristotess (*team lead*) | <https://github.com/Aristotess-Biri> |
| Emelife Henry Chibuike (*assistant team lead*) | <https://github.com/21sezha> |
| Olatunji David Seun | <https://github.com/Seun-David2002> |
| Onyasi Wilmot Ibebi | <https://github.com/Wilmotgit> |
| Raji Nawal | <https://github.com/Nawal734> |
| Ogundein Priscilla | <https://github.com/priscilla-lite9> |
| Adedoyin Daniel | <https://github.com/Oyinade24> |
| Emmanuel Ushahemba Bur | <https://github.com/Emmanuel-Ushahemba-Bur> |
| Owoyemi Mubeen Abdulgafar | <https://github.com/Algiffary04> |
| Osarinmwian Brownson | <https://github.com/osarinmwianbrownson-lab> |


### Work Breakdown

#### By component
| **Component** | **Built by** |
| --- | --- |
| Page skeleton (HTML, JS) | [Olatunji David Seun][seun] |
| Base styles, design tokens (CSS) | [Onyasi Wilmot Ibebi][wilmot] |
| Colour tokens (CSS) | [Ufuophu-Biri Aristotess][aris] |
| Header and theme toggle | [Raji Nawal][nawal] |
| Search bar (markup and styling) | [Ogundein Priscilla][priscilla] |
| Search bar (JS) | [Adedoyin Daniel][doyin] |
| Planet profile (markup) | [Olatunji David Seun][seun] |
| Planet profile (styling) | [Ufuophu-Biri Aristotess][aris] |
| Planet profile (JS) | [Emmanuel Ushahemba Bur][bur] |
| Planetary facts and table | [Owoyemi Mubeen Abdulgafar][abdul] |
| Footer | [Osarinmwian Brownson][brown] |
| Deployment | [Ufuophu-Biri Aristotess][aris] |
| Coordination, README, pull request reviews | [Ufuophu-Biri Aristotess][aris], [Emelife Henry Chibuike][henry] |

#### By function
These are the JavaScript behaviours behind the page.

| **Function** | **What it does** | **Built by** |
| --- | --- | --- |
| Theme toggle | Switches light/dark mode and remembers the choice | [Raji Nawal][nawal] |
| Fetch planet data | Loads the planet list from the API | [Emmanuel Ushahemba Bur][bur] |
| Search | Finds a planet by name and shows a "no results" message if there is none | [Adedoyin Daniel][doyin] |
| Show a planet | Fills the planet card with the chosen planet's details | [Emmanuel Ushahemba Bur][bur] |

#### Support
| **Section** | **Member** |
| --- | --- |
| Search (JS) | [Osarinmwian Brownson][brown] |
| Planet profile (JS) | [Onyasi Wilmot Ibebi][wilmot] |
| Deployment | [Emelife Henry Chibuike][henry] |

> [!NOTE]
> Support roles were for guidance and advice, so they do not own code in that section.

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>

## Want to run our project?
Follow these steps to get the project running on your local machine:

1. **Prerequisites**.

    You'll  need VS Code, Git, Live Server extension for VS Code, and a stable internet connnection.

2. **Clone the repo**.

    In your terminal, run the following command:

    ```bash
    git clone https://github.com/Aristotess-Biri/group20-hajime-frontend-capstone.git
    ```

3. **Open the folder in VS Code**.

    Change directories into the folder:

    ```bash
    cd group20-hajime-frontend-capstone
    ```

    Then open it directly in VS Code:

    ```bash
    code .
    ```

4. **View the project in your browser**.

    Right-click index.html and choose **Open with Live Server**.

> [!TIP]
> Alternatively, use the keyboard shortcut: <kbd>Alt</kbd> + <kbd>L</kbd> <kbd>Alt</kbd> + <kbd>O</kbd>.

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>

## Project Structure
```bash
group20-hajime-frontend-capstone/
├── .github/
│     └── pull_request_template.md
│
├── css/
│     ├── base.css
│     ├── footer.css
│     ├── header.css
│     ├── planet-profile.css
│     ├── search.css
│     └── table.css
├── images/
│     └── icons and images
├── js/
│     ├── fetch.js
│     ├── planet-profile.js
│     ├── search.js
│     └── theme.js
├── README.md
└── index.html
```

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>
 
## How We Worked
- One branch per task, merged through pull requests with at least one review from someone other than the author
- Tasks tracked on a GitHub Project board

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>

## Acknowledgments
- [Design](https://www.figma.com/design/IhNMADS0jxaEeafBRK9KAj/Hajime-cohort?node-id=94702-193&t=dNiCckUK3dEGLgyM-1) by [Amaka N](http://amakandukwu.com/)
- Built as part of [TS Academy](https://tsacademyonline.com/)
- Planet data: the [API](https://anurella.github.io/json/planet.json) provided for the project

<div align="right">
  <a href="#group20-hajime-capstone--ts-academy">Back to top ↑</a>
</div>

<!-- Profile links -->
[aris]: https://github.com/Aristotess-Biri
[henry]: https://github.com/21sezha
[seun]: https://github.com/Seun-David2002
[wilmot]: https://github.com/Wilmotgit
[nawal]: https://github.com/Nawal734
[priscilla]: https://github.com/priscilla-lite9
[doyin]: https://github.com/Oyinade24
[bur]: https://github.com/Emmanuel-Ushahemba-Bur
[abdul]: https://github.com/Algiffary04
[brown]: https://github.com/osarinmwianbrownson-lab
