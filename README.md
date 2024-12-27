Apple Website Clone

This project is a React-based clone of the Apple Watch customization page. It allows users to explore various watch case and band options, customize their selections, and navigate to a save page where they can view their selected configuration, total price, and a shareable link.

Features

1. Customization Options
Case Selection: Users can browse and select from various Apple Watch cases.
Band Selection: Users can browse and select from various Apple Watch bands.
Size Options: Two size options (42mm and 46mm) are available for customization.

2. Interactive Carousel
A carousel enables users to preview case and band images dynamically.

3. Save Functionality
A Save button navigates the user to a SavePage where their selected case and band are displayed, along with the total price and a shareable link.

4. Dynamic Styling
Z-Index and Margin Adjustments: Styling dynamically adjusts based on user interaction (e.g., toggling between Case and Band categories).

5. React Router Integration
Navigation between pages (e.g., from the customization page to the save page) is powered by React Router.

Usage

Open the app and select a case and band for your Apple Watch.
Adjust the size (42mm or 46mm) using the available buttons.
Click Save to navigate to the SavePage where you can view the summary of your customization, including:
Selected case and band images.
Total price.
A shareable link for your configuration.

Key Components

Header: Displays the Apple logo and contains the Save button.
CustomizePage: Main customization interface. Includes the carousel, size options, and category selectors.
SavePage: Displays the selected case and band, total price, and a shareable link.
withRouter: Utility to provide navigate functionality to class components.

Styling

The application is styled using both CSS and inline styles.
Dynamic styling is applied based on user actions (e.g., z-index and margin-top adjustments).

Future Enhancements

Backend Integration:
Replace static data with API calls to fetch product details dynamically.

Improved Styling:
Enhance responsiveness and visual design.

User Authentication:
Allow users to save their configurations to a profile.

Analytics:
Track user interactions for insights.

