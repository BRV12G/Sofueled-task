# Sofueled Task

## Installation (React + Vite)

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Educo-Dashboard
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## React+ Vite + Typescript setup

1. **Installation command**
    ```bash
    npm create vite@latest
    ```
2. Click 'Y' and Proceed by Giving project name.

3. Select 'react' as your package
4. Select the variant (Typescript/Javascript etc.)
5. **Final Steps**
    ```bash
    cd Educo-Dashboard
    npm install
    npm run dev
    ```

## Tyepscript setup

1. **Installation command**
    ```bash
    npm install @tailwindcss/vite
    ```
2. **Modify the vite.config.ts file**
    add the below 2 lines in the existing file
    ```bash
    import tailwindcss from '@tailwindcss/vite'
        tailwindcss(), //(inside the plugins)
    ```
3.   **Add the import statement in the index.css file**
     ```bash
     @import "tailwindcss";
    ```  


