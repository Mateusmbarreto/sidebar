# Sidebar Toggle - HTML, CSS, and JavaScript

A simple sidebar implementation with toggle functionality, developed using HTML, CSS, and JavaScript.

## Features

- Toggle the sidebar by clicking a button.
- Automatic sidebar collapse when the mouse leaves the sidebar area.
- Responsive design with smooth animations.

## Usage

1. Include the necessary HTML structure in your project.
2. Link the provided CSS stylesheet for styling.
3. Integrate the JavaScript code into your project.
4. Customize the sidebar width and other styles as needed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Sidebar Toggle</title>
</head>
<body>

    <div class="sidebar" onmouseenter="handleMouseEnter()" onmouseleave="handleMouseLeave()">
        <!-- Sidebar content goes here -->
        <button onclick="toggleSidebar()">Toggle Sidebar</button>
        <div id="subLinks" style="display: none;">
            <!-- Sublinks go here -->
        </div>
    </div>

    <div class="main-content">
        <!-- Main content goes here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
```

## JavaScript Functions
### toggleSidebar()
Toggle the visibility of the sidebar and main content.

### handleMouseMove(event)
Handle mouse movements to automatically hide the sidebar when the mouse is outside the specified width.

### handleMouseEnter()
Set a flag when the mouse enters the sidebar, ensuring the sidebar remains visible.

### handleMouseLeave()
Reset the flag when the mouse leaves the sidebar, allowing automatic collapse if necessary.

### toggleSubLinks(id)
Toggle the visibility of sublinks with the provided ID.

## Customization
Feel free to customize the sidebar width, styles, and additional features to suit your project's requirements.

### Styles (styles.css)
Adjust styles such as colors, fonts, and dimensions to match your project's design.

### JavaScript (script.js)
Modify the JavaScript code to enhance functionality or integrate with other parts of your application.

