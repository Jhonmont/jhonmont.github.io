const userTheme = localStorage.getItem("theme");
      if (userTheme === "dark") {
        setTheme("dark");
      }
      function setTheme(newTheme) {
        document.documentElement.setAttribute("data-theme", newTheme);
      }