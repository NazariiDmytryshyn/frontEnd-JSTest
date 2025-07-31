# UI Components Library

This repository contains a small set of reusable UI components built with **React**, **TypeScript**, and **Material UI**.  
It includes components for input handling, toast notifications, and a sidebar menu with nested navigation support.

---

## Getting Started

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```

### Open in browser
By default, the app runs on:
```bash
http://localhost:5173
```

## Storybook

### Run Storybook locally
```
npm run storybook
```

Storybook will be available at:
```
http://localhost:6006
```

Here you can preview components such as:
- Input: all input field states
- Toast: various positions & durations
- SidebarMenu: one-level & two-level navigation menus

## Component Overview

### **1. Input**
A customizable input field component supporting:
- Text, password, and number input types
- Clear button (`clearable`)
- Password show/hide toggle

---

### **2. Toast**
A toast notification component with:
- Configurable position (`top` / `bottom`, `left` / `center` / `right`)
- Optional close button
- Auto-hide duration 

---

### **3. SidebarMenu**
A sidebar navigation menu with:
- Drawer-based opening from left or right
- Support for one-level and two-level nested menus
- Expand/collapse animations  


## 1. **Input Component**

### Text Field (Initial State)
The first state of the Input component is a simple text field.  
<img width="1470" height="727" alt="3" src="https://github.com/user-attachments/assets/765ecdc9-df51-4e75-bb58-a1948fdd03f9" />

---

### Password Field with “Show” Button
The second state is a password input field that includes a **Show** button for toggling password visibility.  
<img width="1470" height="716" alt="4" src="https://github.com/user-attachments/assets/e411b731-237b-4dc1-b119-d59d578c44cf" />

---

### Password Field with “Show” & “Clear” Buttons
The third state of the password input includes both **Show** and **Clear** buttons for better control.  
<img width="1468" height="731" alt="7" src="https://github.com/user-attachments/assets/ed24625f-d2a5-44a1-9b03-e7d570bf018a" />

---

## 2. **Toast Component**

### Toast at Bottom Right
The first state of the Toast component is positioned at the **bottom-right** of the screen.  
<img width="1470" height="727" alt="5" src="https://github.com/user-attachments/assets/78e191d3-fd7b-417e-a519-3a3ef8052cd8" />

---

### Toast at Top Left with Close Button
The second state shows the Toast positioned at the **top-left** with an optional **Close** button.  
<img width="1470" height="726" alt="6" src="https://github.com/user-attachments/assets/8db835f5-df52-45b3-ba9c-6114e7a2f420" />

---

## 3. **Sidebar Menu**

### One-Level Sidebar (Right Side)
The first state shows a **one-level nested** Sidebar menu opening from the **right** side.  
<img width="1470" height="726" alt="8" src="https://github.com/user-attachments/assets/8e46233b-7a21-4348-a25f-3028faea8f0a" />

---

### Two-Level Sidebar (Left Side)
The second state shows a **two-level nested** Sidebar menu opening from the **left** side.  
<img width="1470" height="727" alt="2" src="https://github.com/user-attachments/assets/257d5ba2-1bc6-4c3d-a97d-cc948dc7ede8" />
