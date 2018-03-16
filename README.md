# Sequelized_RecipeTracker
Sequelized version of Recipe Tracker for HW13 UMN Coding Bootcamp

### How to use

This application is identical to the Recipe_Tracker application, however, it uses the ORM Sequelize to simplify database processes.

You can use the recipe tracking app either through your local server host or through the deployed Heroku site. To use locally, clone the github repository. In your command line, direct your path to your local clone repository, then enter 

```
node server.js
```

The node application will run, connecting you to your MySQL database and to a local host. If the run is successful, the display should look like the following:

![Alt text](public/assets/images/node_screenshot.png?raw=true "Screenshot of command line")

The website will load into the brower under whatever local host is listed, simply add http:// to the information given after "App now listening".

When loaded, the website will supply a list of recipes to try and recipes you have already tried. Recipes are listed by type. All recipes have active links to the recipe page, simply click on the recipe desired. If you have tried a recipe, click "TRY ME" and it will move the recipe to the "Tried recipes" column. Once there, you are given an option to score the recipe to reference later. Simply choose your score and click the "SUBMIT SCORE" button. The score will then appear within the recipe card. If you want to delete a tried recipe permanently, simply click the "DELETE" button. 

![Alt text](public/assets/images/website_screenshot_top.png?raw=true "Screenshot of website columns")

If you want to add a recipe, include the recipe name, URL to the recipe page, and choose the recipe type in the drop down menu and it will be added to the "Recipes to try" column under the appropriate recipe type. The page will save added recipes after reload.

![Alt text](public/assets/images/website_screenshot_bottom.png?raw=true "Screenshot of website columns")

The site can also be accessed via the deployed Heroku page at https://pacific-brook-47314.herokuapp.com/
