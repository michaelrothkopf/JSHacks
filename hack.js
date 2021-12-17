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
            let promptString = "";
            
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
}

main();
