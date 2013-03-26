---
title: 'Re-designing Sicanstudios'
layout: post
cover: '<img class="yellow" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImxvZ29fMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzM2cHgiIGhlaWdodD0iNDE2cHgiIHZpZXdCb3g9IjAgMCA3MzYgNDE2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3MzYgNDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJsb2dvIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM1Ny4wMjgsMTk0Ljk2bDAuNTU1LDEuMDRoMTcuMDI0bDIuNDg2LTQuOTg2SDM2My45NHYtMC4wMDZoLTEuNjFsMC4wMDMtMC4wMDhoLTMuMzNsNS40MDgtMTAuODQ3DQoJCQlsLTIuNTQ2LTQuODc3bC03LjQzOCwxNC44N2wyLjU1OSw0Ljg5OUwzNTcuMDI4LDE5NC45NnogTTM2MS44NiwxNzUuMjY4bDAuMDA1LDAuMDA5bDAuMDA1LTAuMDA5SDM2MS44NnogTTM2Mi4yNDMsMTg5aDMuMTc1DQoJCQlsMS42LTAuMDNsNC40ODEtOC45NjJoLTQuNzcyTDM2Mi4yNDMsMTg5eiBNMzUzLjQ4OCwyMDIuMDYybDIuMzkyLTQuNzk3bC0yLjU2LTQuOTAzbC0yLjMyMiw0LjY0M0wzNTMuNDg4LDIwMi4wNjJ6DQoJCQkgTTM1NC40MjgsMTkwLjE0NmwtMC4wNDctMC4wOWwwLjAwMywwLjE3OEwzNTQuNDI4LDE5MC4xNDZ6IE0zNTMuMjA1LDE5Mi4xNDJsMC4xMTUsMC4yMmwwLjExNS0wLjIyOUwzNTMuMjA1LDE5Mi4xNDJ6DQoJCQkgTTM3MC4yNzYsMjE4Ljk2N2wtMC4xMjYtMC4yNDJsLTAuMTIxLDAuMjQySDM3MC4yNzZ6IE0zNzguODIsMTkyLjA0OWgtMC4yOTNsMC4xNDYsMC4yOTRMMzc4LjgyLDE5Mi4wNDl6IE0zNzAuMTUsMjE4LjcyNQ0KCQkJbDEwLjg1OC0yMS43MjFsLTIuMzM1LTQuNjYxbC0xMC44OTIsMjEuODQ3TDM3MC4xNSwyMTguNzI1eiBNMzY1LjYzNCwyMTRsNy45NzQtMTUuOTkyaC0xNS44NTVsLTIuNDk1LDUuMDA1bDUuNTA1LDAuMDINCgkJCWw1LjI5LTAuMDE0TDM2MC40OTksMjE0SDM2NS42MzR6IE0zNjguOTg0LDIyMS4wMjh2LTAuMTk5bC0yLjUxOC00LjgyMWgtNS45NTNsMi41MTYsNC45OTJMMzY4Ljk4NCwyMjEuMDI4eiBNMzY1LjY3MiwxNzhIMzY4DQoJCQlsMy40ODctMC4wMjdMMzY5LjAwMSwxNzNoLTUuOTk3bC0wLjAzNSwwLjA3bC0wLjAwMSwwLjA4N2wyLjcwNCw1LjIxOFYxNzh6IE0zNTMuNjksMjAyLjQ3NGwtMC4yMDItMC40MTJsLTAuMTc5LDAuMzU4DQoJCQlMMzUzLjY5LDIwMi40NzR6IE0zMTguOTg0LDIzNy42MmMtMC43MDctMC4zMzctMS4xNTQtMC41Ny0xLjM0NC0wLjdzLTAuMzI3LTAuMjY1LTAuNDE0LTAuNDAzDQoJCQljLTAuMDg2LTAuMTQtMC4xMjktMC4zMDItMC4xMjktMC40ODljMC0wLjMwMSwwLjEwNi0wLjU0NCwwLjMyLTAuNzMxYzAuMjE1LTAuMTg3LDAuNTIyLTAuMjgsMC45MjQtMC4yOA0KCQkJYzAuMzM3LDAsMC42OCwwLjA0NCwxLjAyOCwwLjEzYzAuMzQ5LDAuMDg3LDAuNzksMC4yMzksMS4zMjMsMC40NThsMC42ODQtMS42NDdjLTAuNTE2LTAuMjIzLTEuMDA5LTAuMzk2LTEuNDgtMC41Mg0KCQkJcy0wLjk2Ny0wLjE4NS0xLjQ4Ni0wLjE4NWMtMS4wNTgsMC0xLjg4NiwwLjI1My0yLjQ4NSwwLjc1OXMtMC44OTksMS4yMDEtMC44OTksMi4wODVjMCwwLjQ3LDAuMDkyLDAuODgsMC4yNzMsMS4yMw0KCQkJYzAuMTgzLDAuMzUyLDAuNDI3LDAuNjU5LDAuNzMyLDAuOTIzYzAuMzA1LDAuMjY1LDAuNzYzLDAuNTQsMS4zNzQsMC44MjdjMC42NTEsMC4zMTEsMS4wODMsMC41MzYsMS4yOTUsMC42NzcNCgkJCWMwLjIxMiwwLjE0MiwwLjM3MiwwLjI4OCwwLjQ4MiwwLjQ0MWMwLjEwOSwwLjE1MiwwLjE2MywwLjMyNywwLjE2MywwLjUyMmMwLDAuMzUyLTAuMTI0LDAuNjE1LTAuMzcyLDAuNzkzDQoJCQlzLTAuNjA0LDAuMjY3LTEuMDY5LDAuMjY3Yy0wLjM4OCwwLTAuODE1LTAuMDYyLTEuMjgyLTAuMTg1cy0xLjAzOC0wLjMzNS0xLjcxMi0wLjYzNnYxLjk2OWMwLjgyLDAuNDAxLDEuNzY0LDAuNjAyLDIuODMsMC42MDINCgkJCWMxLjE1NywwLDIuMDYxLTAuMjYsMi43MS0wLjc3OXMwLjk3NC0xLjIzLDAuOTc0LTIuMTMzYzAtMC42NTEtMC4xNzMtMS4yMDItMC41MTktMS42NQ0KCQkJQzMyMC41NTksMjM4LjUxNSwzMTkuOTE4LDIzOC4wNjcsMzE4Ljk4NCwyMzcuNjJ6IE0zOTQuNTk2LDI0My4zOWgyLjExOXYtOS45OTRoLTIuMTE5VjI0My4zOXogTTM3OS42NzQsMjM5LjUNCgkJCWMwLDAuNzc1LTAuMTU2LDEuMzQ0LTAuNDY5LDEuNzA2cy0wLjgxNCwwLjU0My0xLjUwNywwLjU0M2MtMC43MTYsMC0xLjIyOS0wLjE4LTEuNTM4LTAuNTRjLTAuMzExLTAuMzU5LTAuNDY1LTAuOTI1LTAuNDY1LTEuNjk1DQoJCQl2LTYuMTE4aC0yLjExMnY2LjQzOWMwLDEuMTQ1LDAuMzU0LDIuMDQ2LDEuMDY1LDIuNzA0czEuNzA5LDAuOTg3LDIuOTk0LDAuOTg3YzAuODUzLDAsMS41OTEtMC4xNDcsMi4yMTYtMC40NDQNCgkJCWMwLjYyNC0wLjI5NiwxLjEwMi0wLjcyMiwxLjQzMi0xLjI3OGMwLjMzLTAuNTU2LDAuNDk2LTEuMjAzLDAuNDk2LTEuOTQxdi02LjQ2N2gtMi4xMTJWMjM5LjV6IE0zODcuMzcxLDIzMy4zOTZoLTMuMTM4djkuOTk0DQoJCQloMi44M2MxLjc2OCwwLDMuMTItMC40MzgsNC4wNTctMS4zMTJzMS40MDUtMi4xMzUsMS40MDUtMy43OGMwLTEuNTQ1LTAuNDUxLTIuNzQ4LTEuMzU0LTMuNjA5UzM4OS4wMDIsMjMzLjM5NiwzODcuMzcxLDIzMy4zOTZ6DQoJCQkgTTM4Ny4yNjIsMjQxLjY0aC0wLjkwOXYtNi41MDhoMS4xMjhjMS44OTYsMCwyLjg0NCwxLjA3MywyLjg0NCwzLjIyQzM5MC4zMjQsMjQwLjU0NCwzODkuMzAzLDI0MS42NCwzODcuMjYyLDI0MS42NHoNCgkJCSBNNDE1Ljc1NCwyMzguOTY0Yy0wLjM0Ny0wLjQ0OS0wLjk4Ny0wLjg5Ni0xLjkyMS0xLjM0NGMtMC43MDctMC4zMzctMS4xNTQtMC41Ny0xLjM0NC0wLjdzLTAuMzI3LTAuMjY1LTAuNDEzLTAuNDAzDQoJCQljLTAuMDg3LTAuMTQtMC4xMy0wLjMwMi0wLjEzLTAuNDg5YzAtMC4zMDEsMC4xMDYtMC41NDQsMC4zMjEtMC43MzFjMC4yMTQtMC4xODcsMC41MjEtMC4yOCwwLjkyMy0wLjI4DQoJCQljMC4zMzcsMCwwLjY4LDAuMDQ0LDEuMDI4LDAuMTNjMC4zNDksMC4wODcsMC43OSwwLjIzOSwxLjMyMiwwLjQ1OGwwLjY4NS0xLjY0N2MtMC41MTYtMC4yMjMtMS4wMDktMC4zOTYtMS40OC0wLjUyDQoJCQlzLTAuOTY4LTAuMTg1LTEuNDg3LTAuMTg1Yy0xLjA1NywwLTEuODg1LDAuMjUzLTIuNDg0LDAuNzU5cy0wLjg5OCwxLjIwMS0wLjg5OCwyLjA4NWMwLDAuNDcsMC4wOTEsMC44OCwwLjI3MywxLjIzDQoJCQljMC4xODIsMC4zNTIsMC40MjYsMC42NTksMC43MzEsMC45MjNjMC4zMDUsMC4yNjUsMC43NjMsMC41NCwxLjM3NCwwLjgyN2MwLjY1MSwwLjMxMSwxLjA4MywwLjUzNiwxLjI5NSwwLjY3Nw0KCQkJYzAuMjEyLDAuMTQyLDAuMzczLDAuMjg4LDAuNDgyLDAuNDQxYzAuMTA5LDAuMTUyLDAuMTY0LDAuMzI3LDAuMTY0LDAuNTIyYzAsMC4zNTItMC4xMjUsMC42MTUtMC4zNzMsMC43OTMNCgkJCXMtMC42MDUsMC4yNjctMS4wNywwLjI2N2MtMC4zODcsMC0wLjgxNC0wLjA2Mi0xLjI4MS0wLjE4NXMtMS4wMzgtMC4zMzUtMS43MTMtMC42MzZ2MS45NjljMC44MiwwLjQwMSwxLjc2NCwwLjYwMiwyLjgzLDAuNjAyDQoJCQljMS4xNTgsMCwyLjA2Mi0wLjI2LDIuNzExLTAuNzc5czAuOTc1LTEuMjMsMC45NzUtMi4xMzNDNDE2LjI3MywyMzkuOTYzLDQxNi4xLDIzOS40MTIsNDE1Ljc1NCwyMzguOTY0eiBNNDAzLjU1OSwyMzMuMjM4DQoJCQljLTEuNTM2LDAtMi43MTYsMC40MzgtMy41MzgsMS4zMTZjLTAuODIyLDAuODc3LTEuMjMzLDIuMTQ3LTEuMjMzLDMuODExYzAsMS42NjQsMC40MSwyLjkzOSwxLjIzLDMuODI4czEuOTk2LDEuMzMzLDMuNTI3LDEuMzMzDQoJCQlzMi43MDctMC40NDQsMy41MjctMS4zMzNzMS4yMy0yLjE2LDEuMjMtMy44MTRjMC0xLjY1OC0wLjQwNy0yLjkzLTEuMjIxLTMuODE0QzQwNi4yNjksMjMzLjY4MSw0MDUuMDk0LDIzMy4yMzgsNDAzLjU1OSwyMzMuMjM4eg0KCQkJIE00MDMuNTQ1LDI0MS43NDljLTAuODQ0LDAtMS40NzctMC4yODItMS45LTAuODQ4Yy0wLjQyNC0wLjU2NC0wLjYzNi0xLjQwNS0wLjYzNi0yLjUyMmMwLTEuMTE2LDAuMjE0LTEuOTU4LDAuNjQyLTIuNTI1DQoJCQljMC40MjktMC41NjcsMS4wNjQtMC44NTIsMS45MDgtMC44NTJjMS42ODIsMCwyLjUyMiwxLjEyNiwyLjUyMiwzLjM3N0M0MDYuMDgxLDI0MC42MjYsNDA1LjIzNSwyNDEuNzQ5LDQwMy41NDUsMjQxLjc0OXoNCgkJCSBNMzY0LjU2NiwyMzUuMTU5aDIuNzE0djguMjNoMi4xMTh2LTguMjNoMi43MTV2LTEuNzY0aC03LjU0N1YyMzUuMTU5eiBNMzMyLjExNSwyMzUuMDE2YzAuMzY1LDAsMC43MzYsMC4wNjYsMS4xMTUsMC4xOTgNCgkJCWMwLjM3OCwwLjEzMywwLjc1NCwwLjI4NywxLjEyNywwLjQ2NWwwLjY4NC0xLjcyM2MtMC45NzktMC40NjktMS45NTQtMC43MDQtMi45MjYtMC43MDRjLTAuOTUyLDAtMS43ODIsMC4yMDktMi40OTEsMC42MjYNCgkJCXMtMS4yNTIsMS4wMTYtMS42MywxLjc5OGMtMC4zNzksMC43ODEtMC41NjcsMS42OTEtMC41NjcsMi43M2MwLDEuNjUsMC4zODUsMi45MTYsMS4xNTUsMy43OTgNCgkJCWMwLjc3LDAuODgyLDEuODgyLDEuMzIyLDMuMzM2LDEuMzIyYzEuMDEyLDAsMS45MjgtMC4xNzEsMi43NDgtMC41MTN2LTEuNzc3Yy0wLjk5OCwwLjM1Mi0xLjg0OSwwLjUyNi0yLjU1MSwwLjUyNg0KCQkJYy0xLjY3MiwwLTIuNTA4LTEuMTE0LTIuNTA4LTMuMzQzYzAtMS4wNywwLjIxOS0xLjkwNiwwLjY1Ni0yLjUwNUMzMzAuNzAxLDIzNS4zMTUsMzMxLjMxOCwyMzUuMDE2LDMzMi4xMTUsMjM1LjAxNnoNCgkJCSBNMzYxLjI5MSwyMzcuNjJjLTAuNzA2LTAuMzM3LTEuMTUzLTAuNTctMS4zNDMtMC43cy0wLjMyNy0wLjI2NS0wLjQxMy0wLjQwM2MtMC4wODctMC4xNC0wLjEzMS0wLjMwMi0wLjEzMS0wLjQ4OQ0KCQkJYzAtMC4zMDEsMC4xMDctMC41NDQsMC4zMjItMC43MzFjMC4yMTQtMC4xODcsMC41MjEtMC4yOCwwLjkyMy0wLjI4YzAuMzM3LDAsMC42OCwwLjA0NCwxLjAyOCwwLjEzDQoJCQljMC4zNDksMC4wODcsMC43ODksMC4yMzksMS4zMjMsMC40NThsMC42ODMtMS42NDdjLTAuNTE1LTAuMjIzLTEuMDA4LTAuMzk2LTEuNDc5LTAuNTJzLTAuOTY3LTAuMTg1LTEuNDg2LTAuMTg1DQoJCQljLTEuMDU4LDAtMS44ODYsMC4yNTMtMi40ODUsMC43NTlzLTAuODk4LDEuMjAxLTAuODk4LDIuMDg1YzAsMC40NywwLjA5MSwwLjg4LDAuMjczLDEuMjNjMC4xODIsMC4zNTIsMC40MjYsMC42NTksMC43MywwLjkyMw0KCQkJYzAuMzA2LDAuMjY1LDAuNzY0LDAuNTQsMS4zNzUsMC44MjdjMC42NTEsMC4zMTEsMS4wODMsMC41MzYsMS4yOTUsMC42NzdjMC4yMTIsMC4xNDIsMC4zNzMsMC4yODgsMC40ODIsMC40NDENCgkJCWMwLjEwOSwwLjE1MiwwLjE2NCwwLjMyNywwLjE2NCwwLjUyMmMwLDAuMzUyLTAuMTI1LDAuNjE1LTAuMzczLDAuNzkzcy0wLjYwNCwwLjI2Ny0xLjA2OSwwLjI2Nw0KCQkJYy0wLjM4OCwwLTAuODE1LTAuMDYyLTEuMjgyLTAuMTg1cy0xLjAzOC0wLjMzNS0xLjcxMi0wLjYzNnYxLjk2OWMwLjgxOSwwLjQwMSwxLjc2MywwLjYwMiwyLjgzLDAuNjAyDQoJCQljMS4xNTcsMCwyLjA2MS0wLjI2LDIuNzEtMC43NzlzMC45NzUtMS4yMywwLjk3NS0yLjEzM2MwLTAuNjUxLTAuMTc0LTEuMjAyLTAuNTItMS42NQ0KCQkJQzM2Mi44NjYsMjM4LjUxNSwzNjIuMjI2LDIzOC4wNjcsMzYxLjI5MSwyMzcuNjJ6IE0zMjMuMjM2LDI0My4zOWgyLjExOXYtOS45OTRoLTIuMTE5VjI0My4zOXogTTMzOS4wNjIsMjMzLjM1NGwtMy41MjcsMTAuMDM1DQoJCQloMi4yODJsMC43MjUtMi4zNzloMy42NDVsMC43MjUsMi4zNzloMi4yODNsLTMuNTQxLTEwLjAzNUgzMzkuMDYyeiBNMzM5LjA3NCwyMzkuMjMzYzAuNzExLTIuMzAxLDEuMTQzLTMuNzQzLDEuMjkzLTQuMzI3DQoJCQljMC4wMzYsMC4xNjQsMC4wOTcsMC4zODgsMC4xODEsMC42N2MwLjA4NCwwLjI4MywwLjQ2MiwxLjUwMiwxLjEzMiwzLjY1N0gzMzkuMDc0eiBNMzUzLjQxLDIzOC4xMjYNCgkJCWMwLDAuNTM4LDAuMDM0LDEuNDU2LDAuMTAyLDIuNzU1aC0wLjA0N2wtNC4zNDEtNy40ODVoLTIuNjczdjkuOTk0aDEuODk0di00LjcwM2MwLTAuNTY5LTAuMDQ0LTEuNTIxLTAuMTMtMi44NTdoMC4wNjENCgkJCWw0LjM0OSw3LjU2MWgyLjY5MnYtOS45OTRoLTEuOTA2VjIzOC4xMjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=" alt="sicanstudios logo svg" />'
---
{{ page.cover }}

The web currently moves at an incredibly rapid pace. And along with it, the feeling of your site being inadequate/old, increases. Some designers prefer to display a “coming soon” splash page instead of their portfolio. Others prefer to link directly to their Dribbble accounts. I decided to bite the bullet and re-invent the portfolio experience. This is the story of how and why I re-designed my website.
<!--more-->

##Big type
The first thing you notice when visiting this site: Big type.

I used to hate big type for websites. Until I switched to a 13” 2013 MacBook Air (1440px wide). Since then, I caught myself, quite often, increasing the font size when browsing [Cmd + '+']—mostly when browsing designer websites.

<a href="http://sicanstudios.com/images/blog/assets/sicanstudios-responsive.png" class="img" target="_blank"><img src="http://sicanstudios.com/images/blog/assets/sicanstudios-responsive.png" alt="sicastudios responsive" /></a>

The type of this site is not ginormous. When the browser has a width above 1260px, it features a font size of 22px for the body, under 1260px and above 768px (tablets and old PCs), it features a font size of 20px, and for mobile a font size of 18px. I think these font sizes provide the optimum reading experience on each device.

##Browsing the portfolio
In the past, my portfolio was laid out in a single central column, having to scroll down to see more projects. Checking analytics, I discovered that most people would click on the first project thumb, they would get redirected to the project’s page, and never return back to browse the other projects.

That sucked.

In a portfolio, people prefer to look at images instead of reading case studies. But since I’m not a UI designer (eye-candy), I need text to explain my thought process, describe interactions, and what I learned from the project.

So I got rid of showing the case study and project images in the form of a blog article. I now show only the images of the project. If you want to read the case study, there’s a button that loads the case study.

##Loading case studies
The case study slides up, on the same page, and blurs the content behind it. The content is loaded with AJAX from the dedicated project page. Because this browsing experience is not very common, to avoid confusion, you can click anywhere around the loaded content to close the case study (see below).

![sicanstudios closing area](http://sicanstudios.com/images/blog/assets/closing-area.png)

Additional functionality was added to remember the scroll position of user at time the case study was opened. Moreover, if the user navigated to another page and then used the back button, the case study should be loaded again.

To navigate to an older/newer project, or blog article, you just have to move your mouse to the left/right edge of the browser and click.

##Browsing portfolio images
The projects are presented by showing only a logo and a solid background. This invites the user to engage with the particular project. In order to explore it, the user just has to hover their mouse, or tap, over the area.

The image area is divided by the number of total images of the project:

![division portfolio area](http://sicanstudios.com/images/blog/assets/project-division.svg)

By just moving your mouse over the different areas, the main image is switched for another one. The user doesn’t have to click *“next”*, or click an arrow, or a small bullet—all common functionalities of slideshows.

##Pixel perfect
I tried to make this website pixel-perfect on Google Chrome, iPad, and iPhone.
I wrote in detail [how to create a pixel-perfect website](http://sicanstudios.com/post/pixel-perfect/). The most important thing is to pick a grid and stick with it. If you want to check this website on a grid, click the button below.

<a href="#" class="button grid"><span>Enable Grid</span><span class="hidden">Disable Grid</span></a>

##Retina assets
More than half of the images found on this site are SVG (Scalable Vector Graphics). The advantage of using SVG, over PNG or JPG, is that the graphic is infinitely scalable (and future-proof). No loss of quality or pixelation. 

For non-SVG images, I created two sets of assets. An asset at normal resolution and a scaled up (@2x) asset, for retina devices. I swap the image with JavaScript by checking the width of the user’s browser. I serve the correct asset only, to preserve bandwidth. I don’t force the user to download a normal resolution asset, and then download the @2x version because their browser width is big enough.

    var devicePixelRatio = window.devicePixelRatio || 1,
        screenWidth = window.innerWidth * devicePixelRatio;

    if (screenWidth > 1260) {
      img.setAttribute("src", img_retina);
    } else {
      img.setAttribute("src", img_regular);
    }

A neat trick if you don’t want to create @2x assets for images, is to scale them up and save them with a lower JPG quality (around 30). More on [making your website look pretty on retina devices](http://sicanstudios.com/post/retina-website-tutorial/).

##Keyboard shortcuts
I added keyboard shortcuts for easier navigation. And because I’m cool.

* Previous/Next post or design: [&larr;] / [&rarr;]
* Close case study: [Esc]
* Home/Work: [H], [W]
* About: [A]
* Blog: [B]
* Contact/Email: [C], [M]

##Navigation icons
The most clear, direct way of describing something is with text. Nothing says home, better than *“home”*.

Unless English isn’t your native language.

Then you could mistake *“home”* for *“man”* (*“homme”* in French).

<a href="http://sicanstudios.com/images/blog/assets/sicanstudios-icons.svg" class="img" target="_blank"><img src="http://sicanstudios.com/images/blog/assets/sicanstudios-icons.svg" class="yellow" alt="sicastudios icons svg" /></a>

Aside from this, I wanted to provoke the user’s curiosity, and have them explore the icons, engage with the website. Hence I also removed the text under the icons (it appears on hover). You have to move your mouse over to see what each icon represents. Which brings me to my next point.

##Animations
When the user hovers the icons, I psychologically reward them with a smooth, cool, CSS animation. The icons are personified, as if they’re reacting to being bothered/poked.

##Powered by GitHub and Jekyll
Almost a year ago, I canceled my hosting accounts and I [moved all my websites to GitHub](http://sicanstudios.com/post/guide-hosting-website-dropbox-github/). For the blog I was [using Scriptogr.am](http://sicanstudios.com/post/blog-dropbox-scriptogram/), a service that allows you to blog with just your Dropbox account.

The problem with GitHub is that you can only render static files (HTML & CSS & JS). I needed finer control. So I switched to [Jekyll](https://github.com/mojombo/jekyll).

Jekyll allows me to create complex layouts, create different themes (depending on the YAML front block), write blog posts in Markdown, and many more cool stuff.

##Final thought
> “As Little Design As Possible” — Dieter Rams

Unless you’re designing for the web. On the web you need to engage the user, you need to entertain, you need to create memorable experiences. You’re just a click away from Facebook, YouTube, LolCats, etc. You need to stand out from the other websites.

Where you draw the line, that’s up to you.