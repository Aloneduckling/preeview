let pages = [
    {
        "title": "google",
        "web": "https://www.google.com",
        "x": "50",
        "y": "70"
    },
    {
        "title": "google",
        "web": "https://www.google.com",
        "x": "50",
        "y": "70"
    },
    {
        "title": "google",
        "web": "https://www.google.com",
        "x": "50",
        "y": "70"
    },
    {
        "title": "google",
        "web": "https://www.google.com",
        "x": "50",
        "y": "70"
    }
]
chrome.runtime.onInstalled.addListener(() => {
    console.log('extension online');
    chrome.storage.sync.set({pages}, ()=>{
        console.log('data is set');
    }); 
});
