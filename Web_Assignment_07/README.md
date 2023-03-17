/ Designed Sandwich Website using different SCSS features.

Functions: 
Functions enable you to define intricate operations on SassScript values that can be utilized repeatedly throughout your stylesheet. One such function was created to modify text color based on the background color. These functions are exhibited in _functions.scss.

Variables:
Variables are employed to assign a value to a name that can be referenced throughout the stylesheet instead of repeatedly bringing up the value. Colors are stored in some of these variables, and multiple variables are present in _variables.scss.

Nesting:
Sass enables you to structure your CSS selectors in a manner that mirrors the visual hierarchy of your HTML. Nesting was utilized in several locations, such as the about section, and samples can be found in style.scss.

Mixins:
Mixins enable you to define styles that can be reused throughout your stylesheet, as shown in _mixins.scss. In this project, the graph-text mixin was employed to modify the text format for 'p' tags in the about, menu, and contact sections.

Flexbox Layout:
Flexbox was designed for one-dimensional layouts, and it has been used for icons in the about section and the navigation section. Check style.scss for more information.

Interpolation:
nterpolation can be utilized in nearly any part of a Sass stylesheet to embed the output of a SassScript expression into a block of CSS. Simply wrap an expression in #{} in any location. In this project, it was used for the text-decoration property, which is extensive and used in multiple locations. The Mixins are displayed in style.scss.

Grid Layout:
Grid is a two-dimensional layout system that can handle both rows and columns at the same time. It has been used for the contact and menu sections. Check style.scss for more information.

Placeholder Selectors: 
Placeholder selectors appear and behave similarly to class selectors, but they begin with a '%' and are not included in the CSS output. In this project, they were used to modify font size, as can be seen in _placeholder.scss.

Custom Properties: 
Custom properties, which include color and other characteristics, can be found in style.scss.