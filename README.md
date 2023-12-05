# Project Structure

This project is organized in a structured manner to keep the code and assets well-arranged:

```
src/
|── assets/
|   ├── icons/ # SVG icons
|   └── images/ # PNG and JPG images
|
|── components/ # Reusable components
|
|── customHooks/ # Custom hooks for specific functionalities
|   ├── useCarouselState.js # Custom hook for carousel state management
|   └── useSlideshow.js # Custom hook for slideshow functionality
|
|── data/ # Data files for information used in components
|   ├── carousel.js # Array of products for the carousel
|   ├── headerData.js # Array of categories for the header
|   ├── mobileCategory.js # Array of categories for the mobile component
|   └── topFooter.js # Data for the top footer
|
└── screens/ # Screens where components are assembled for the final result
```

## Components

### HomeScreen

The main component for the home screen.

#### Props

- None

### Banner

The banner component for displaying images.

#### Props

- `bannerImage`: The image source for the banner.

### DesktopCarousel

The desktop carousel component for displaying items.

#### Props

- `title`: The title of the carousel.
- `backGround`: The background style for the carousel container.

### MobileCarousel

The mobile carousel component for displaying items.

#### Props

- `title`: The title of the carousel.
- `classNameLiActive`: The class name for the active list item.
- `backGround`: The background style for the carousel container.

# How to Start the Project

To start the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.

Thank you for visiting my repository!