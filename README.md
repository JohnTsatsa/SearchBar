# SearchBar

# Description
This project expands a search bar when you click on the icon.  
If you click again on the icon the search bar shrinks again  
When the search bar is expanded gets ready to type in (focus)  

# Guidance
# HTML
Make a div that contains the searchbar and a button  
Use "fontawsome.com" to make a magnifying-glass icon

# CSS
Customize the search-bar  
Put the icon-button above it  
Customize the search bar when button is pressed that larges the bar  
Move the icon to the right when the bar expands  
When the search bar is ready to type, dont show outline  

# Javascript
Change the class of the main div when the button is pressed  
Use "toggle" method


# Techniques that used
# HTML
- background-image: linear-gradient(90deg,red,purple);  
makes a background from left to right from red to purple

# CSS
- .div.button .active {    }  
targets a specific class inside another class
- .element:focus{ outline: none; }  
removes outline when is focus

# Javascript
- element.classList.toggle("active")  
adds and remove the class active from the class element
- element.focus()  
focus on the element class
