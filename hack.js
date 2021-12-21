function main()
{
    function enableEdit()
    {
        document.body.contentEditable = "true"; 
        document.designMode = "on"; 
    }

    function disableEdit()
    {
        document.body.contentEditable = "false";
        document.designMode = "off";
    }

    function changeTitle(newTitle)
    {
        document.title = newTitle;
    }

    function changeFavicon(newFavicon)
    {
        const findlink = document.getElementsByTagName("link");
        for (const lnkelem of findlink)
        {
          if (lnkelem.rel === "shortcut icon" || lnkelem.rel === "icon")
          {
            lnkelem.href = newFavicon;
          }
        }
    }
    
    function addInspectElement()
    {
        const inspectElement = document.createElement("div");
        inspectElement.style.backgroundColor = "#ccc";
        inspectElement.style.display = "flex";
        inspectElement.style.flexDirection = "column";
        inspectElement.style.padding = ".5rem";
        inspectElement.style.minHeight = "500px";

        const inspectElementTitleBox = document.createElement("p");
        inspectElementTitleBox.style.padding = "2px";
        inspectElementTitleBox.style.flex = "1";
        inspectElementTitleBox.style.fontSize = "22.5px";
        inspectElementTitleBox.style.fontWeight = "bold";
        inspectElementTitleBox.style.backgroundColor = "#bbb";
        inspectElementTitleBox.style.color = "#333";
        inspectElementTitleBox.innerText = "Inspect Element";

        inspectElement.appendChild(inspectElementTitleBox);

        const inspectElementEditBox = document.createElement("textarea");
        inspectElementEditBox.id = "jsh_iobox_0385712";
        inspectElementEditBox.setAttribute("autocomplete", "off");
        inspectElementEditBox.setAttribute("autocorrect", "off");
        inspectElementEditBox.setAttribute("autocapitalize", "off");
        inspectElementEditBox.setAttribute("spellcheck", "off");
        inspectElementEditBox.style.flex = "6";

        inspectElement.appendChild(inspectElementEditBox);

        const inspectElementApplyButton = document.createElement("button");
        inspectElementApplyButton.id = "jsh_apbtn_0385712";
        inspectElementApplyButton.style.flex = "1";
        inspectElementApplyButton.innerText = "Apply Changes";

        inspectElement.appendChild(inspectElementApplyButton);

        inspectElement.id = "jsh_overlay_0385712";
        document.body.appendChild(inspectElement);

        document.getElementById("jsh_iobox_0385712").value = document.documentElement.innerHTML;

        document.getElementById("jsh_apbtn_0385712").addEventListener("click", (e) => {
          e.preventDefault();

          const text = document.getElementById("jsh_iobox_0385712").value;

          document.documentElement.innerHTML = text;

          document.getElementById("jsh_iobox_0385712").value = text;
        });
    }
    
    class Option
    {
        title = "";
        callback: () => {};
        
        constructor(title, callback)
        {
            this.title = title;
            this.callback = callback;
        }
    }
    
    class OptionsMenu
    {
        options = [];
        
        addOption(title, callback)
        {
            this.options.push(new Option(title, callback));
        }
        
        prompt() {
            let promptString = "JSMenu";
            let i = 0;
            for (const option of this.options)
            {
                i++;
                promptString += `\n${i}) ${option.title}`;
            }
            this.options[parseInt(prompt(promptString)) - 1].callback();
        }
    }
    
    menu = new OptionsMenu();
    
    menu.addOption("Quick change title and favicon", () => {
        changeTitle("Home | Schoology");
        changeFavicon("https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico");
    }
                   
    menu.addOption("Custom title change", () => {
        changeTitle(prompt("New title:"));
    });
    
    menu.addOption("Custom favicon change", () => {
        changeTitle(prompt("New favicon:"));
    });
    
    menu.addOption("Custom title and favicon change", () => {
        changeTitle(prompt("New title:"));
        changeFavicon(prompt("New favicon:"));
    });
    
    menu.addOption("Enable edit mode", () => {
        enableEdit();
    });
    
    menu.addOption("Disable edit mode", () => {
        disableEdit();
    });
    
    menu.prompt();
}

main();
