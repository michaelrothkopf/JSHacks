function main()
{
    function enableEdit()
    {
        document.body.contentEditable = "true"; 
        document.designMode = "on"; 
    }

    function disableEdit()
    {
        document.body.contentEditable = "true";
        document.designMode = "on";
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

    let option = prompt("JSHacks: Main Menu\nOptions:\n1) Quick change title and favicon\n2) Custom title change\n3) Custom favicon change\n4) Custom title and favicon change\n5) Enable edit mode\n6) Disable edit mode", "1");

    if (option == "1")
    {
        changeTitle("Home | Schoology");
        changeFavicon("https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico");
    }
    else if (option == "2")
    {
        changeTitle(prompt("New title:"));
    }
    else if (option == "3")
    {
        changeFavicon(prompt("New favicon:"));
    }
    else if (option == "4")
    {
        changeTitle(prompt("New title:"));
        changeFavicon(prompt("New favicon:"));
    }
    else if (option == "5")
    {
        enableEdit();
    }
    else if (option == "6")
    {
        disableEdit();
    }
}

main();
