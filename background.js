chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Search Scryfall for \"%s\" ",
        contexts: ["selection"],
        id: "scryfall_search"
    }, () => { })
    chrome.contextMenus.onClicked.addListener(
        (e) => {
            chrome.tabs.create({ url: "https://scryfall.com/search?q=" + e.selectionText });
        }
    );
});