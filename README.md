### Objective

Your challenge is to build an analytics page using TypeScript and React.

### Brief

Your challenge is to build an analytics page for meez users that includes
general information about their content and team.

The [data.json](./data.json) file includes data for one fake user. Use that file
to pull the data and make the needed calculations to display the content.

When loaded, the page should display a grid of 6 analytics metrics. Each metric
should have a **title** and the **metric value**. The 6 metrics are:

-   Total number of recipes

-   Total number of recipe creators

    -   A creator is the user that created the recipe. The property
        **created_by** holds the name of the recipe creator

-   First recipe create date

    -   Using the property **created** in the data

-   Total number of recipe views

    -   The property **total_recipe_views** represents the number of times a
        recipe was viewed. For this metric display the sum of all recipe views

-   Recipe with the most views

    -   The **name** of the recipe that has the highest value for
        **total_recipe_views**

-   Recipe creator with the most views

    -   The **created_by** of the creator that has the highest total recipe
        views. In other words: the highest sum of all the **total_recipe_views**
        of recipes they created

### Filter (Bonus)

(This section is a bonus. It is not mandatory)

Allow the user to filter the data in the dashboard by recipe creator. Display
the filter anyway you like (as a dropdown, as a list, up to you). The filter
will display the list of names of all the recipe creators in the data (per
**created_by** property).

When filtering by a recipe creator – the 6 metrics should adjust to display
values related to the selected recipe creator only. For example: **Total number
of recipes** should display the number of recipes the selected recipe creator
created.

### Additional Resources

Below are credentials to a demo meez account. Feel free to login and play
around.

<https://app.getmeez.com/login>

Username: josh+casestudy\@getmeez.com

Password: Password123

### Evaluation Criteria

Note: this is not a design exercise so do not worry if the display is not
perfect.

-   **TypeScript** best practices

-   Correctness: does the functionality act in sensible, thought-out ways?

-   Maintainability: is it written in a clean, maintainable way?

-   Efficiency: is it written to scale? Was it written with performance in mind?

-   User Experience: is it written with User Experience in mind (for example:
    smooth transitions, clear loading indicators, etc.)

-   Responsiveness: does the page display properly on all screen sizes?

-   Testing: is the system adequately tested?

### Deliverables

Make sure to include all source code in the repository.

### CodeSubmit

Please organize, design, test and document your code as if it were going into
production - then push your changes to the master branch. After you have pushed
your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The meez Team
