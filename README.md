# Agrigistics Assessment

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/agrigistics.git](https://github.com/vian-duppie/agrigistics-assessment.git)
   cd agrigistics
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Development Server:**
   ```bash
   npm start
   ```

4. **Navigate to Application:**
   Open your browser and go to `http://localhost:4200/`.

## Challenges

- **Challenge 1:**
  - *Description:* The first challenge was Angular itself, as it was my first time using it in a very long time.
  - *Solution:* To overcome this, I used the Angular documentation along with Medium blog posts to learn about Angular.

- **Challenge 2:**
  - *Description:* At the start, I wasted a lot of time trying to actually make navigation work and using routes. The problem I had was I was looking at posts on Medium about routing in Angular, but it was based on older Angular versions.
  - *Solution:* I found the solution by looking at the Angular documentation, as I probably should have from the start.

## Improvements

- **Improvement 1:**
  - *Description:* I would make more robust components. For example, the input component can be much better by adding properties that can be changed to alter how the input looks.
  - *Benefit:* This would enhance the flexibility and reusability of the input component across different parts of the application.

- **Improvement 2:**
  - *Description:* I would create a datatable component that can work for any data. It would be able to take in column names and also mark them if they are sortable or not. This would then alter how data can be displayed and also sorted in the table.
  - *Benefit:* This would make the data tables more dynamic and reusable for different datasets and sorting requirements.

- **Improvement 3:**
  - *Description:* Not really an improvement, but I did not get to add the action bar on the right as I wasted some valuable time on the navbar and other small stuff.
  - *Benefit:* Completing this would provide a more complete and functional interface for the user.

## Time Spent

- **Navbar and Styling:**
  - *Time Spent:* A significant amount of time
  - *Description:* I spent a bit of time on the navbar and, as explained above, I had some issues regarding the navbar. While I was busy with the styling of the navbar, I decided to leave the navbar as is (still requires some styling) to continue with the rest of the page.

- **Component Creation and Styling:**
  - *Time Spent:* Most of the development time
  - *Description:* After the navbar, most of my time was spent creating components and styling them to match the design as closely as possible.

- **Input Linking and Filtering:**
  - *Time Spent:* The last bit of development time
  - *Description:* I spent the last bit of time just linking the input to send the value to the payroll page and then filter the data before it is being sent through to the datatable.
