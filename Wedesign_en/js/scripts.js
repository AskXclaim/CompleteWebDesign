// Mobile Menu
const setRightForSlidingMenu = (rightValue = 0) => {
    const sliderMenu =
        document.getElementById("sliding-header-menu-outer");
    if (sliderMenu) {
        sliderMenu.style.right = `${rightValue ?? 0}px`;
    }
}
const hambugerIconDiv = document.getElementById("hamburguer-icon");
if (hambugerIconDiv) {
    hambugerIconDiv.onclick = () => {
        setRightForSlidingMenu();
    }
}

const slidingMenuCloseBtn = document.getElementById("sliding-header-menu-close-button");
if (slidingMenuCloseBtn) {
    slidingMenuCloseBtn.onclick = () => {
        setRightForSlidingMenu(-320)
    }
}


// About us Tab

var aboutUs = {
    "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
    "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
    "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

const getTabs = () =>
    document.getElementsByClassName("single-tab");
const removeClassFromTabs = (tabs, className = "single-tab-selected") => {
    if (tabs && Array.isArray(tabs) && className && typeof className === "string") {
        tabs.forEach((aTab) => {
            aTab.classList.remove(`${className}`);
        });
    }
}
const onTabClick = (event) => {
    const tab = event.target;
    if (tab) {
        const tabs = Array.from(getTabs());
        removeClassFromTabs(tabs);
        tab.classList.add("single-tab-selected")
        document.getElementById("box-text").innerHTML = aboutUs[tab.innerHTML];
    }
};

const tabs = getTabs();
console.log(tabs);
const tabsArray = tabs.length > 0 ? Array.from(tabs) : tabs;
if (tabsArray && Array.isArray(tabsArray)) {
    console.log("I am adding event listeners");
    tabsArray.forEach((tab) => {
        tab.addEventListener("click", onTabClick);
    });
}


// Service slider

var ourServices = [
    {
        'title': 'Web design',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
        'title': 'Branding',
        'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
        'title': 'Digital Marketing',
        'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    }

];

const servicePrevious = document.getElementById("service-previous");
const serviceNext = document.getElementById("service-next");
const serviceTitle = document.getElementById("service-title");
const serviceText = document.getElementById("service-text");
const getItemIndex = (title) => {
    console.log(title);
    if (title && typeof title === "string" && title.length > 0) {
        console.log(title);
        return ourServices.findIndex((item) => {
            return title.includes(`${item.title}`);
        });
    }
}

const getItem = (index, action = "previous") => {
    if (Number.isInteger(index)
        && index >= 0 && index < ourServices.length) {
        if (action && action === "previous") {
            index = index - 1;
            index = index < 0 ? ourServices.length - 1 : index;
        }
        if (action && action === "next") {
            index = index + 1;
            index = index > ourServices.length - 1 ? 0 : index;
        }
        return ourServices[index];
    }
    throw new Error("No Item found");
}

const moveServiceItem = (action = "previous") => {
    const currentItemIndex = getItemIndex(serviceTitle.innerHTML);
    const item = getItem(currentItemIndex, action);
    serviceTitle.innerHTML = item.title;
    serviceText.innerHTML = item.text;
}

if (servicePrevious)
    servicePrevious.onclick = () => moveServiceItem();


if (serviceNext)
    serviceNext.onclick = () => moveServiceItem("next");
    

// Footer

document.getElementById("current_year").innerHTML=
    (new Date()).getFullYear();

  
   


   